export class NSCommonConstants {
  static readonly loggerUrl = 'rest/api/log';

  static readonly browsers: Array<{ name: string, link: string, img: string }> = [
    {
      name: 'Google Chrome',
      link: 'https://www.google.com/chrome/',
      img: 'https://www.google.com/chrome/static/images/chrome-logo.svg'
    },
    {
      name: 'Firefox',
      link: 'https://www.mozilla.org/en-US/firefox/',
      img: 'https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-md.f0603b4c28b4.png'
    },
    {
      name: 'Microsoft Edge',
      link: 'https://www.microsoft.com/en-us/edge',
      img: 'https://upload.wikimedia.org/wikipedia/en/9/98/Microsoft_Edge_logo_%282019%29.svg'
    },
    {
      name: 'Safari',
      link: 'https://support.apple.com/en-us/HT204416',
      img: 'https://www.apple.com/v/safari/k/images/overview/safari_icon__ep64chrczuky_medium_2x.jpg'
    }
  ];

  static readonly charOnlyPattern = /^[a-zA-Z, ]*$/;
  static readonly numbersOnlyPattern = /^[0-9, ]*$/;
  static readonly notNsCorpDomainPattern = /^((?!nscorp.com).)*$/;
  static readonly phoneMaskNumbersPattern = /\D/g;
  static readonly phoneMaskLThreePattern = /^(\d{0,3})/;
  static readonly phoneMaskLSixPattern = /^(\d{0,3})(\d{0,3})/;
  static readonly phoneMaskLTenPattern = /^(\d{0,3})(\d{0,3})(\d{0,4})/;
  static readonly specialCharacter = /^[a-zA-Z0-9, ]*$/;
  static readonly specialCharacterEmailInbox = /^[a-zA-Z0-9_.-]*$/;
  static readonly specialCharacterRacf = /^[a-zA-Z0-9]*$/;
  static readonly trimPattern = /^\s*\s*$/;
}
