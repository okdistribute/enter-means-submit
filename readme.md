#enter-means-submit
[![NPM](https://nodei.co/npm/enter-means-submit.png)](https://nodei.co/npm/enter-means-submit/)

For all inputs in the given div, enter means submit!

It'll trigger a submit for the first submit button it finds in that div.

## Usage

```bash
npm install enter-means-submit
```

In your browser (with <a href="https://github.com/substack/node-browserify">browserify</a>)

```js
var enterMeansSubmit = require('enter-means-submit')

var forms = document.getElementsByClass('enter-means-submit')
enterMeansSubmit(forms)
```

```html
<div class="form">
  <input type="text" name="mytext" placeholder="enter your text..." />
  <button name="cancel-btn">Cancel</button>
  <button type="submit" name="submit-btn" onclick="submit()">Submit</button>
</input>
```

Typing "enter" in the ```input``` element triggers a click event for the button with ```type="submit"```. In this example, ```submit()``` would be called.






