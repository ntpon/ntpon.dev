---
title: "CSS พื้นฐาน PART-3: Inline และ Block, CSS Box Model Padding และ Margin "
date: "Jan 26, 2022"
category: "CSS"
isActive: true
isShowHome: true
---

# ประเภทของ HTML Tag / Element

ในบทของ HTML เราได้ลองใช้ Tag เราพบพฤติกรรมบางอย่างของ Tag ที่แตกต่างกัน เช่น ทำไม เราใช้ h1 ต่อกัน ตัวหนังสือจะขึ้นบรรทัดใหม่อัตโนมัติ แต่พอใช้ img ภาพ จะเรียงต่อกัน

เราสามารถแบ่งออกเป็น 2 ประเภท คือ

- Block
- Inline

เราลองมาดูรายละเอียดในแต่ละแบบกันครับ

# Block

ลักษณะคือจะใช้พื้นที่แนวนอนทั้งหมด หากมี Element อื่นมาใช้ จะทำการขึ้นบรรทัดใหม่อัตโนมัติ (ลองนึกถึงเวลาใช้ Tag h1 )

- Element ชนิดนี้ได้แก่ \<div>, \<section>, \<article>, \<nav>, \<h1>-\<h2>, \<p>, \<ul>, \<li>
- มี padding, margin (เราจะได้เรียนต่อไปครับ)
- Block-Level Elements ทั้งหมด
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

```html
<h1>Hello</h1>
<!-- ขึ้นบรรทัดใหม่อัตโนมัติ -->
<h2>Hello</h2>
```

# Inline

ตรงกันข้ามกับ Block จะใช้พื้นที่และแนวนอนเท่าที่เนื้อหามี, การกำหนด width, height จะไม่มีผล Element จะใช้พื้นที่แบบอัตโนมัติ

- Element ชนิดนี้ได้แก่ \<img>, \<a>, \<input>, \<br>, \<span>, \<strong>
- margin-top,margin-bottom จะไม่มีผล padding-top, padding-bottom ไม่มีผลกับ Inline
- Inline Elements ทั้งหมด
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#changing_element_levels

```html
<a href="#">Link 1</a>
<!-- จะเรียงต่อกัน -->
<a href="#">Link 2</a>
```

# CSS Box Model

ใน css เมื่อเราพูดถึง box model จะเป็นการปรับแต่งลักษณะที่ wrap ใน element นั้น ลองดูภาพประกอบด้านล่างนี้ครับ

![](box-model.png)

จากภาพจะเห็นว่าเราสามารถแบ่งส่วนต่างได้ดังนี้ครับ

- Content ส่วนของ Element นั้นๆ
- Padding พื้นที่ล้อมรอบ content
- Border เส้นขอบสิ่งจะอยู่รอบ padding
- Margin พื้นที่ล้อมรอบนอกตัว border

> เมื่อเราเขียน css เราไม่จำเป็นต้องกำหนดทุกตัว เราสามารถเลือกได้เลยว่าจะกำหนด padding อย่างเดียว หรือจะกำหนด margin อย่างเดียว

# Padding & Margin

คำสั่งของ padding, margin จะมีรูปแบบที่เหมือนกัน โดยเราเปลี่ยนแค่ keyword padding, margin เท่านั้น

```css
.box {
  /* Apply to all four sides */
  padding: 1em;

  /* vertical | horizontal */
  padding: 5px 10px;

  /* top | horizontal | bottom */
  padding: 1px 2px 2px;

  /* top | right | bottom | left */
  padding: 5px 1px 0 2px;
}
```

หรือจะใช้คำสั่งโดยระบุเฉพาะตัวก็ได้ครับ

```css
.box {
  padding-top: 1px
  padding-right: 4px
  padding-bottom: 2px
  padding-left: 3px;
}
```

# Border

คำสั่งที่ใช้

```css
.box {
  /* style */
  border: solid;

  /* width | style */
  border: 2px dotted;

  /* style | color */
  border: outset #f33;

  /* width | style | color */
  border: 10px solid red;
}
```

# เรื่องที่น่าสนใจ

กรณี margin-top , margin-bottom ชนกัน

```html
<div class="box-1">Hello 1</div>
<div class="box-2">Hello 2</div>
```

```css
.box-1 {
  margin-bottom: 5px;
}

.box-2 {
  margin-top: 5px;
}
```

css จะป้องกันขนาด margin มากเกินไป มันจะทำยุบรวม margin ให้ครับ

# อ้างอิง

- https://hacks.mozilla.org/2015/03/understanding-inline-box-model/
- https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/
- https://www.w3schools.com/css/css_boxmodel.asp
