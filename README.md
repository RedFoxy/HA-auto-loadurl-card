# Auto load URL card by [RedFoxy Darrest](https://github.com/RedFoxy)

Custom [Lovelace](https://www.home-assistant.io/lovelace) card to use in [Home assistant](https://www.home-assistant.io/) allowing lovelace to auto load different url after X seconds.

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

## Support

Hey dude! Help me out for a couple of :beers: or a :coffee:!

[![coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/zJtVxUAgH)

## Options

| Name              | Type    | Requirement  | Description                                 |
| ----------------- | ------- | ------------ | ------------------------------------------- |
| type              | string  | **Required** | `custom:auto-reload-card`                   |
| url               | string  | **Required** | Url to load, must starts with http or https |
| delay_in_seconds  | integer | **Required** | Delay in seconds before to load the url     |

### Installation
Use [HACS](https://hacs.xyz/) or follow this [guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins)

```
resources:
  url: /local/auto-loadurl-card.js
  type: module
```

### Configuration example:

 - Load a my GitHub page after 45 seconds:
```yaml
type: 'custom:auto-reload-card'
url: https://github.com/RedFoxy
delay_in_seconds: 45
```

## Credits

This card is inspired by [auto-reload-card](https://github.com/ben8p/lovelace-auto-reload-card) by [ben8p](https://github.com/ben8p)

