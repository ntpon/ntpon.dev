---
title: 'CSS พื้นฐาน PART-1: ความหมายของ CSS และการใช้งานเบื้องต้น'
date: 'Jan 26, 2022'
category: 'CSS'
isActive: true
isShowHome: true
---

# Introduction

เราเขียน HTML มาแล้ว แต่หน้าเว็บไซต์เรายังดูไม่ทันสมัยเท่าไหร่เลย นั้นเพราะ HTML **ทำหน้าที่แค่วางโครงสร้างเนื้อหาของเรา** และนี้อีกขั้นหนึ่งของการสร้างเว็บไซต์ครับ เราจะใช้ CSS เพื่อช่วยทำให้เว็บไซต์ของเราสวยงามยิ่งขึ้น

![](html-vs-css.jpg)

> การเรียนรู้ CSS จะเน้นไปที่ว่า เราต้องการให้เนื้อหาของเรามีลักษณะเป็นอย่างไร เช่น หัวข้อควรมีสีฟ้าเข้ม มีพื้นหลังสีดำ รูปภาพมีความกว้างและสูง 500px

# CSS คืออะไร

- ย่อมาจาก Cascading Style Sheets มันเรียกกันว่า CSS
- ทำหน้าที่เป็นภาษาที่กำหนดลักษณะของเว็บไซต์

# หลักการทำงาน

- เขียน HTML
- เขียน CSS เพื่อกำหนดลักษณะของ Element
- บราวเซอร์แปลงรหัสที่เราเขียนมาแสดงผล

> จะมีบาง Element ที่ บราวเซอร์กำหนดค่าเริ่มต้นไว้ ซึ่งเราสามารถเขียน css เพื่อทับกฏนั้นได้

# Chrome DevTools

Chrome นำเสนอตัวช่วยสำหรับการพัฒนาเว็บของเรา ซึ่งจะช่วยให้เราดู code html,css ของเว็บไซต์อื่นๆได้ด้วย เราสามารถทดลองใช้งานได้ดังนี้ครับ

- เปิดหน้าเว็บที่เราต้องการ
- คลิกขวาเลือก Inspect หรือ กด F12

![](./chrome-devtool.png)

- จะปรากฏ code ในส่วนของหน้เว็บครับ โดยประกอบไปด้วย html, css

![](dev-tool-2.png)

- สามารถปรับแต่งตำแหน่งได้ โดยคลิกที่รูปจุดสามจุด หรือ กดที่รูปลูกศร เพื่อเลือก Element ที่ต้องการดู

# First CSS

มาเริ่มต้นเขียน css ตัวแรกกันครับ โดยจะเขียนได้ เราต้องมี html ก่อน ดังนั้นจะมีขั้นตอนดังนี้ครับ

- สร้างไฟล์ index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello CSS!</h1>
  </body>
</html>
```

- เพิ่มส่วนของ css ไปดังนี้ครับ

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello CSS!</h1>
  </body>
</html>
```

- ผลลัพธ์

![](first-css.png)

# Rule ของ CSS

![](css-rule.png)

จากรูป CSS จะประกอบไปด้วย 2 ส่วนคือ

- Selector : หมายถึงเป้าหมายของเราที่เราต้องการจะกำหนด ในตัวอย่างต้องการกำหนด Tag h1
- Declaration : จะอยู่ภายใน {} หมายถึงส่วนที่เราจะกำหนดลักษณะต่างๆของ Selector ที่เราเลือกครับ ประกอบไปด้วย 2 ส่วน
  - Property : คุณลักษณะที่ต้องการกำหนด เช่น สี ขนาดตัวอักษร ภาพพื้นหลัง ในที่นี้ color หมายถึง สีของตัวหนังสือ
  - value : เป็นค่าของ Property ซึ่งจะสัมพันธ์กัน ค่าของ property จะแตกต่างกัน ในที่นี้เราต้องการกำหนด color ก็จะสามารถพิมพ์ชื่อสีลงไปได้ครับ

# การใช้งาน CSS

หลังจากรู้จักกฏการเขียน css แล้ว มาดูวิธีการเรียกใช้ css กันครับ เราสามารถทำได้ 3 วิธี ดังนี้ครับ

- inline เขียนที่ element โดยตรง
- internal เขียนด้วยการสร้าง tag \<style>\</style> ไว้ในส่วนของ \<head> จากนั้นทำการเขียน css
- external สร้างไฟล์ .css แยกออกมาจากนั้นเรียกใช้ผ่าน tag link

> วิธี external เป็นที่นิยมที่สุดเพราะทำให้สามารถดูแลรักษา code ได้ง่าย และยังแยกส่วนของ html, css ออกจากกันเป็นคนละไฟล์ด้วยครับ

# Inline

- เขียนโดยตรงกับ Element Tag โดยใช้ property ที่ชื่อว่า style

```html
<body>
  <h1 style="color: red">Hello CSS!</h1>
</body>
```

# Internal

- เริ่มต้นด้วยการสร้าง \<style> ไว้ในส่วนของ \<head> จากนั้นทำการสร้าง rule ของ css ภายใน

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello CSS!</h1>
  </body>
</html>
```

# External

หลักการคือการสร้างไฟล์ .css แยกต่างหาก จากนั้น ทำการเข้าไฟล์เพื่อมาใช้งาน

- สร้างไฟล์ styles.css

```css
h1 {
  color: red;
}
```

- ไฟล์ external.html ทำการนำเข้าไฟล์ stylesheet ด้วย tag \<link>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

# ปรับแต่ง Hello World

```css
body {
  background-color: black;
}
h1 {
  color: white;
  text-align: center;
}
p {
  color: white;
  text-align: center;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>Hello</h1>
    <p>ยินดีต้อนรับเข้าสู่เว็บไซต์</p>
  </body>
</html>
```

# ผลลัพธ์

![](html-example.png)
