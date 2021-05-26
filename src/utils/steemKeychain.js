export default function hasKeychain() {
  return (window.steem_keychain) ? true : false;
}