---
title: 'HTML พื้นฐาน PART-3: Path และการเชื่อมโยงเว็บไซต์'
date: 'Jun 19, 2022'
category: 'HTML'
isActive: true
---

# URL และการจำลองเซิฟเวอร์

URL ย่อมาจาก Uniform Resource Locator หมายถึงตัวระบุตำแหน่งที่คุณสามารถค้นหาทรัพยากรบนเว็บ ลองมาดูเว็บไซต์ของเรากันครับ ตอนนี้มันแสดง URL ในรูปแบบของ Path OS เรามาแก้ไขให้มีลักษณะเหมือนกับ Server จริงๆครับ

มีหลายวิธีในการจำลองเซิฟเวอร์ ในการศึกษาภาษา HTML และ เรื่อง Path จะใช้ extension ของ vscode ที่ชื่อ live-server ครับ

# live-server

- extension เสริมของ vscode
- เป็นตัวช่วยจำลองเซิฟเวอร์
- เมื่อมีการแก้ไขไฟล์จะ reload อัตโนมัติ
- อื่นๆ

# ติดตั้ง Live Server

- เปิด tab extension

![](live-server.png)

- กลับมายังหน้า index.html หลักของเราและเริ่มต้นการทำงาน live-server

![](start-live-server.jpg)

# เข้าใจ URL

![](posts/url.png)

มาดูความหมายของแต่ละส่วนกันครับ

- Schema คือสิ่งที่ใช้เชื่อมต่อกับเว็บไซต์ในตัวอย่างเป็นรูปแบบการส่งข้อมูลแบบ Hypertext Transfer Protocol (HTTP) ในเว็บสมัยใหม่ จะมีรูปแบบที่ปลอดภัยกว่าคือ HTTPS
- Host จะเป็นชื่อ Domain สำหรับที่อยู่ของเว็บไซต์ ซึ่งขึ้นต้นด้วย www แต่เบื้องหลังของ Host จริงๆจะเป็นเพียงตัวเลข IP Address
- filepath มักขึ้นด้วย / โดยจะประกอบด้วย director (โพลเดอร์) เพื่อเข้าถึงไฟล์
  - filepath จะสอดคล้องกับการวาง directory ของเรา

# การเชื่อมโยงเว็บไซต์

ในเว็บไซต์หนึ่งแห่งมักจะมีหลายหน้า ดังนั้นจึงมักจะมีเมนูส่วนของเมนูเพื่อนำทางเราไปแต่ละหน้า หรือบางครั้ง เราเขียนบทความแล้วมีแหล่งอ้างอิงไปยังเว็บไซต์ภายนอก สิ่งเหล่านี้เราสามารถทำได้ด้วย Element Achor

# Achor

- มีหน้าที่ทำการ สร้างเชื่อมโยงไปยังหน้าเว็บ, email
- กำหนด href สำหรับ ปลายทางที่ต้องการจะไป
- กำหนด target สำหรับบริบท เมื่อเรากด
  - self: เป็นค่าเริ่มต้น เปิดทับหน้าปัจจุบัน
  - blank: เปิดหน้าต่างใหม่

# การเชื่อมโยงภายในเว็บไซต์

```html
<body>
  <p>
    ค้นหาข้อมูลไม่เจอ ลองใช้ Google
    <a href="www.google.com">คลิกเพื่อไป Google</a>.
  </p>
</body>
```

# การเชื่อมภายในเว็บไซต์

- ให้เราทำการสร้างไฟล์ index.html, contact.html, about.html

```html
<body>
  <nav>
    <a href="http://localhost:3000/index.html">Home</a>
    <a href="http://localhost:3000/about.html">About</a>
    <a href="http://localhost:3000/contact.html">Contact</a>
  </nav>
</body>
```

# การเชื่อมโยงภายในหน้าด้วย attribute id

- กำหนด id ให้แต่ละส่วน

```html
<div id="content">ส่วนของบทความ</div>
<div id="footer">ส่วนของ Footer</div>
```

- สร้างส่วนที่จะเชื่อมโยงกับ id โดยจะใส่ # ขึ้นต้น

```html
<nav>
  <a href="#contect">ไปยัง Content </a>
  <a href="#footer">ไปยัง Footer </a>
</nav>
<div id="content">ส่วนของบทความ</div>
<div id="footer">ส่วนของ Footer</div>
```

# เมื่อเราไม่ได้ระบุชื่อไฟล์จะเกิดอะไรขึ้น ?

กรณีที่เราพิมพ์เพียงชื่อโพลเดอร์ Server จะทำสิ่งใดสิ่งหนึ่งต่อไปนี้ (เรียงลำดับการทำงานหรือขึ้นอยู่กับการกำหนดค่า)

- ค้นหา index.html และแสดงผล
- แสดงไฟล์ทั้งหมด
- แสดงข้อความว่าไม่พบ directory

# Path Directory

- Directory เป็นเพียงชื่อโพลเดอร์ เช่นเดียวกับที่ใน computer ของเรามีโพลเดอร์ต่างๆ
- ในเว็บไซต์ขนาดใหญ่จะมี directory แยกต่างหากสำหรับแต่ละส่วนของเว็บไซต์ และ directory สำหรับเก็บไฟล์ประเภทต่างๆเช่น (Image, Video, Font, Style)
- ลองคิดถึงการจัดโพลเดอร์ในเครื่องของเรา เรามีโพลเดอร์แยกสำหรับแต่ละส่วน หากทุกอย่างอยู่หน้า Desktop ไฟล์ต่างๆของเราจะดูซับซ้อนและวุ่นวายมากแน่ๆ

![](images/bad-directory.png)

![](images/good-directory.png)

# Relative URL

ก่อนที่เราจะไปรู้จัก Relative จากความรู้ของเราตอนนี้ เราสามารถเข้าถึงไฟล์และเชื่อมโยงเว็บไซต์ได้ด้วย URL แบบเต็ม เช่น

- http://localhost:3000/projects/hello.html

แต่ยังมีวิธีอื่นในการเข้าถึงไฟล์ คือ URL Relative ซึ่งจะเป็นการระบุ resource ที่สัมพันธ์กับหน้าปัจจุบัน จากตัวอย่างด้านบนเราต้องการเข้าถึง ไฟล์ hello.html ถ้าเราอยู่ที่ Directory project เราสามารถเข้าถึงไฟล์อื่นๆได้ด้วยการพิมพ์

- hello.html
- resume.html

เร็วกว่าการเขียนแบบเต็ม

- http://localhost:3000/projects/hello.html
- http://localhost:3000/projects/resume.html

ซึ่งเป็นประโยชน์อย่างมาก อนาคตเราอาจมีการเปลี่ยนแปลง host name เราก็ไม่ต้องไปตามเปลี่ยนทุกส่วน

# การเข้าถึง Directory จาก Relative

- กรณีอยู่ directory เดียวกัน สามารถเข้าถึงไฟล์ได้เลย

  - about.html หรือ ./about.html
    - ./ มีความหมายว่า ที่อยู่ปัจจุบัน

- กรณี file ที่เราต้องการไปอยู่ในโพลเดอร์ย่อยอีก (Subdirectory)

  - อ้างถึง directory ย่อยๆนั้นก่อน เช่นอยู่ในโพลเดอร์ projects เราจะเขียนได้แบบนี้ครับ
  - projects/hello.html หรือ ./projects/hello.html
  - ให้คิดว่าเป็นการต่อท้ายจาก director ปัจจุบัน

- กรณี file อยู่ director หลัก หรือต้องย้อนกลับไป
  - กลับไปยัง directory ก่อนด้วย ../ หมายถึงกลับไป 1 ชั้น directory
  - เช่น ปัจจุบันเราอยู่ที่ไฟล์ /projects/index.html เราต้องการอ้างถึงไฟล์ index ที่อยู่ถอยหลังไป 1 ชั้น เราสามารถเขียนได้แบบนี้ครับ
  - ../index.html

# การเข้าถึง Director จาก root

- หากเราต้องการให้เริ่มต้นที่ director แรกเสมอ ให้เราพิมพ์ / ก่อน แล้วตามด้วย resource ที่เราต้องการ
- มันจะทำการเริ่มที่ชื่อ host เราเสมอ

# ปรับปรุงเว็บไซต์ของเรา

จากที่เราได้เรียนเรื่อง path มาเราจะมาปรับปรุงในส่วนของการเชื่อมโยงเว็บไซต์ภายในของเรากันครับ โดยในที่นี้ผมจะเลือกใช้ url แบบ relative

ในส่วนของหน้า index.html, about.html ,contact.html

```html
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    <a href="./projects/index.html">Project</a>
  </nav>
</body>
```

ในส่วนของ projects/index.html, projects/hello.html เราจะเขียนให้มันย้อนกลับมาแบบนี้ครับ

```html
<body>
  <nav>
    <a href="../index.html">Home</a>
    <a href="../about.html">About</a>
    <a href="../contact.html">Contact</a>
    <a href="index.html">Project</a>
  </nav>
</body>
```
