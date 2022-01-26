---
title: 'CSS พื้นฐาน PART-2: Selector ของ CSS'
date: 'Jan 26, 2022'
category: 'CSS'
isActive: true
isShowHome: true
---

# Selector

อย่างที่เราได้เรียนรู้ไปในบทที่แล้ว การจะใช้ css เพื่อมากำหนดลักษณะให้กับหน้าเว็บ เราจำเป็นจะต้องใช้ Selector ในการเข้าถึง Element ซึ่งได้เราได้ทำไป เป็นวิธีการ Secltor เฉพาะ Tag ในบทนี้เราจะมาลองดู Selector ตัวอื่นๆที่เรามักจะใช้กันบ่อยครับ

# Type selector

- Select Element ตามชื่อของ Element
- รูปแบบ : elementname

```html
<h1>Hello</h1>
```

```css
h1 {
  color: red;
}
```

# Class Selector

- Select Element ตาม class ซึ่งเป็น attributes
- รูปแบบ : .class

```html
<h1 class="header-red">Hello</h1>
```

```css
.header-red {
  color: red;
}
```

# ID Selector

- Select Element ตาม id ซึ่งเป็น attributes
- #id

```html
<h1 id="header-first">Hello</h1>
```

```css
.header-first {
  color: red;
}
```

# Universal selector

- Select Element ทั้งหมด มักใช้ในการกำหนดค่าเริ่มต้น
- รูปแบบ \*

```html
<h1>Hello 1</h1>
<p>Hello 2</p>
```

```css
* {
  color: blue;
}
```

# Attribute selector

- เลือกเฉพาะ elemetn ที่ attribute ตามที่กำหนด
- รูปแบบ [attr] [attr=value] [attr~=value] [attr^=value] [attr$=value] [attr*=value]

  - [attr] มี attribute นี้อยู่
  - [attr=value] มีค่าตรงตาม value เท่านั้น ห้ามมีคำอื่นอยู่
  - [attr~=value] ต้องมี value อยู่เป็นคำอยู่ (มีช่องว่าง)
  - [attr*=value] ต้องมี value อยู่อย่างน้อย ไม่จำเป็นต้องมีช่องว่าง
  - [attr^=value] ต้องมี value นำหน้าอยู่
  - [attr$=value] ต้องมี value ต่อท้าย

- จากตัวอย่างก็คือเลือกเฉพาะ input ที่มี type เป็น text เท่านั้น

```html
<input type="text" value="TEST TEXT" /> <input type="number" value="50" />
```

```css
input[type='text'] {
  color: red;
}
```

# Grouping selectors

- เลือกหลายตัวให้มี css เดียวกัน
- เช่นต้องการให้ h1,h2 มีสีเดียวกันจะเขียนได้แบบนี้ครับ

```html
<h1>Hello 1</h1>
<h2>Hello 2</h2>
```

```css
h1,
h2 {
  color: blue;
}
```

ความหมายเหมือนกับการเขียนแบบนี้ครับ

```css
h1 {
  color: blue;
}
h2 {
  color: blue;
}
```

# Descendant Combinators

- เลือก Element ทั้งหมดที่อยู่ภายในตัวที่กำหนด
- รูปแบบ ใช้ช่องว่าง
- จากตัวอย่างก็คือ ให้เลือกเฉพาะ li ที่อยู่ใน div

```html
<div>
  <ul class="fruits">
    <li>
      <span> A1 </span>
    </li>
    <li>A2</li>
    <li>A3</li>
  </ul>
  <ul class="water">
    <li>W1</li>
    <li>W2</li>
    <li>W3</li>
  </ul>
</div>
```

```css
div li {
  color: red;
}
```

# Child Combinator

- เลือก Element ทั้งหมดที่มี parent ตามที่กำหนดเท่านั้น
- รูปแบบ ใช้ >
- จากตัวอย่างก็คือ ให้เลือกเฉพาะ li ที่มี parent เป็น div เท่านั้น

```html
<div>
  <ul class="fruits">
    <li>
      <span> A1 </span>
    </li>
    <li>A2</li>
    <li>A3</li>
  </ul>
  <ul class="water">
    <li>W1</li>
    <li>W2</li>
    <li>W3</li>
  </ul>
</div>
<div>
  <li>Hello</li>
</div>
```

```css
div > li {
  color: red;
}
```

# General sibling combinator

- ใช้เลือก Element ที่อยู่ถัดจากกัน และอยู่ระดับเดียวกัน
- ใช้ ~
- จากตัวอย่างหมายถึงเลือก span ที่อยู่ถัดจาก p ทั้งหมด มีตัวมาคั่นได้

```html
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a red span!</span>
<span>And this is a red span!</span>
<code>More code...</code>
<span>And this is a red span!</span>
<div>How are you?</div>
<p>Whatever it may be, keep smiling.</p>
<h1>Dream big</h1>
<h2>that's all.</h2>
<span>And yet again this is a red span!</span>
<div>
  <span>TEST </span>
</div>
```

```css
p ~ span {
  color: red;
}
```

# Adjacent sibling combinator

- ใช้เลือก Element ที่อยู่ถัดจากกัน
- ใช้ +
- จากตัวอย่างคือเลือกเฉพาะ span ที่อยู่ถัดจาก p ห้ามมีตัวมาคั่น

```html
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a red span!</span>
<span>And this is a red span!</span>
<code>More code...</code>
<span>And this is a red span!</span>
<div>How are you?</div>
<p>Whatever it may be, keep smiling.</p>
<h1>Dream big</h1>
<h2>that's all.</h2>
<span>And yet again this is a red span!</span>
<div>
  <span>TEST </span>
</div>
<div>
  <p>TEST</p>
  <span>TEST 2 </span>
</div>
```

```css
p + span {
  color: red;
}
```

# Pseudo classes

- สำหรับส่วน element ที่เป็น State เช่น เมื่อเอาเมาส์ไปวางที่ element จะให้ขึ้นอะไร
- ใช้ : เพียงตัวเดียว จากนั้นเลือกสถานะที่ต้องการ
- จากตัวอย่างคือเลือก button สถานะที่เป็น hover คือสถานะที่เราเอาเมาส์ไปวางไว้ตรง element

```html
<button>Test</button>
```

```css
button {
  color: black;
}
button:hover {
  color: red;
}
```

# Pseudo elements

- ใช้สร้าง element ที่ไม่มีอยู่ใน HTML
- ใช้ ::
- จากตัวอย่างก็คือ ที่ บรรทัดแรกของ p ให้มี color สีฟ้า

```html
<p>Hello 1</p>
<p>Hello 2</p>
```

```css
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

# Inheritance การสืบทอดของ CSS

CSS มีความสามารถอย่างหนึ่งคือสามารถส่งต่อ ลักษณะให้กับ children ได้

```html
<body>
  <p>Hello</p>
  <p>Hello 2</p>
  <div>
    <h1>Hello In Div</h1>
  </div>
</body>
```

```css
body {
  color: red;
}
```

จากตัวอย่างก็จะหมายถึง element ใดก็ตามที่อยู่ใน body จะมี color เป็นสีแดง

# Conflex ปัญหาการชนกันของ CSS

จากตัวอย่างด้านบนลองดูโค้ดส่วนนี้เพื่อความเข้าใจมากยิ่งขึ้นครับ

```html
<body>
  <p>Hello</p>
  <p>Hello 2</p>
  <div>
    <h1>Hello In Div</h1>
  </div>
</body>
```

```css
body {
  color: red;
  text-transform: uppercase;
}
p {
  color: blue;
}
```

เราจะเห็นว่า p ทุกตัวมีสีฟ้า นั้นเพราะ p ได้ทำการ overide (เขียนทับ) property กัน ลองมาดูรายละเอียดกันครับว่า css มีกฏในเรื่องนี้อย่างไรครับ

# Last Rule

- หาก selector เหมือนกัน (ชนิดเดียวกัน) Selector ตัวสุดท้ายจะชนะ
- จากตัวอย่าง p ตัวสี blue จะชนะ

```css
p {
  color: red;
}
p {
  clor: blue;
}
```

# Specificity

ต่อไปเป็นกรณีที css ได้ให้ลำดับของความสำคัญแต่ละแบบไว้ครับว่า กรณีแบบใด มีความสำคัญมากกว่ากัน โดยกฏ Last Rule จะไม่มีผล

- !importance;
- Inline Style
- ID #
- Class, Attributes
- Type selector

ด้านบนจะเรียงจากสำคัญมากไปหาสำคัญน้อย

# แนะนำเกมสำหรับฝึก CSS Selector

- https://flukeout.github.io/

# อ้างอิง

- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
- https://www.w3schools.com/cssref/css_selectors.asp
- Jon Duckett (2011), HTML and CSS: Design and Build Websites.
