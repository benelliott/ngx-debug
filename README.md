# ngx-debug

[Chrome extension download link](https://chrome.google.com/webstore/detail/fdajeibbknpjholibfbbbnidpibgeejh) (currently pending approval)

A simple Chrome extension which exposes a subset Angular's debugging APIs in a more concise interface, to make it easier
to quickly check and set component state from the DevTools Console.

When the extension is installed, an object called `ngx` is exposed on the window.

## Methods

| `ngx-debug` method                                 | Angular `ng` equivalent                                        | Description                                                                                                                                                                           |
| -------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngx.c`                                            | `ng.probe($0).componentInstance`                               | Returns the state of the component currently selected in the Elements panel.                                                                                                          |
| `ngx.c$(selector)`                                 | `ng.probe(document.querySelector(selector)).componentInstance` | Returns the state of the first component to match `selector`.                                                                                                                         |
| `ngx.in(inputName, value)`                         | No equivalent                                                  | Sets the value of the input `inputName` on the currently-selected component to the value `newValue`, then executes a tick.                                                            |
| `ngx.in$(selector, inputName, value)`              | No equivalent                                                  | Sets the value of the input `inputName` on the first component matching `selector` to the value `newValue`, then executes a tick.                                                     |
| `ngx.out(outputName, subscribe?)`                  | No equivalent                                                  | Subscribes to changes in the output `outputName` on the currently-selected component, calling `subscribe` on value changes if provided, else logging the value to the console.        |
| `ngx.out$(selector, outputName, subscribe?)`       | No equivalent                                                  | Subscribes to changes in the output `outputName` on the first component matching `selector`, calling `subscribe` on value changes if provided, else logging the value to the console. |

## Inspiration

The extension is inspired by [this tweet](https://mobile.twitter.com/NetanelBasal/status/1040120123879837696) by @NetanelBasal.
