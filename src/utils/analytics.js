export class Analytics
{
  static sendEvent(eventName, eventType, eventValue, logAnalytic = false)
  {
    Analytics.sendAnalytic('send', 'event', eventName, eventType, eventValue, logAnalytic);
  }

  static sendAnalytic(action, kind, name, type, value, logAnalytic = false)
  {
    if (logAnalytic) {
      console.log(`sendAnalytic(${action}, ${kind}, ${name}, ${type}, ${value})`);
    }

    // eslint-disable-next-line no-undef
    ga(action, kind, name, type, value);
  }
}
