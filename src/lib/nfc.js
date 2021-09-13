import React, {useState, useEffect} from 'react';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

export function CheckNFC() {
  const [isSupported, setIsSupported] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const checkNFC = async () => {
    const isNfcSupported = await NfcManager.isSupported();
    const isNfcEnabled = await NfcManager.isEnabled();
    if (isNfcSupported) {
      setIsSupported(true);
      if (isNfcEnabled) {
        setIsEnabled(true);
      }
    }
  };

  useEffect(() => {
    checkNFC();
  }, []);

  return {isSupported, isEnabled};
}

export function GetTag() {
  const [tag, setTag] = useState(null);

  const mountNFC = () => {
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tagData) => {
      setTag(tagData);
      NfcManager.unregisterTagEvent().catch(() => 0);
    });
  };

  const unmountNFC = () => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.unregisterTagEvent().catch(() => 0);
  };

  useEffect(() => {
    mountNFC();
    return () => unmountNFC();
  }, []);

  const get = async () => {
    try {
      await NfcManager.registerTagEvent();
    } catch (ex) {
      console.warn('ex', ex);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }
  };

  const cancel = () => {
    NfcManager.unregisterTagEvent().catch(() => 0);
  };

  return {tag, get, cancel};
}
