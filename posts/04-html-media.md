---
title: 'HTML พื้นฐาน PART-4: Media แสดงข้อมูลที่เป็นสื่อ รูปภาพ วีดีโอและเสียง'
date: 'Jan 21, 2022'
category: 'HTML'
isActive: true
---

# Picture

รูปภาพเป็นส่วนสำคัญของเว็บไซต์ เรามักจะแทรกรูปภาพอยู่เสมอ เช่น Logo, ภาพพื้นหลัง ซึ่งช่วยทำให้เว็บไซต์เราดูสวยงามและเป็นเอกลักษณ์ โดยเราจะใช้ Element ที่ชื่อ img

# \<img>

การแทรกภาพอย่างรวดเร็วกำหนดเพียงแค่ src ก็เพียงพอที่จะแสดงผลแล้ว แต่ยังมี attribute อื่นๆที่เราสามารถเพิ่มลงไปได้ดังนี้ครับ

- src เพื่อบอกบราวเซอร์ว่า ไฟล์ รูปภาพของเราอยู่ที่ไหน กำหนดเป็น path แบบที่เราจะได้เรียนในส่วนที่แล้ว
- alt เป็นคำอธิบายภาพ
- title อธิบายเพิ่มเติมเกี่ยวกับภาพ เมื่อเราเอาเมาส์วางที่รูปภาพ บราวเซอร์จะแสดงข้อความในส่วนนี้
- width ระบุความกว้าง
- height ระบุความสูง

> ค่าที่สำคัญที่สุดคือ src หากเราไม่กำหนด ภาพจะไม่แสดง

# โครงสร้างของโปรเจค

- images
  - pic-1.jpg
  - pic-2.jpg
- videos
  - vdo-1.mp4
- audios
  - sound-1.mp3
- index.html

จากโครงสร้างด้านบนเราจะใช้วิธี URL Relative ในการแทรงสื่อ

# ตัวอย่างการแทรกรูปภาพ

```html
<img src="images/pic-1.jpg" alt="แฮมเบอร์เกอร์" />
```

ทดลองเพิ่ม attibutes อื่นๆ

```html
<img
  src="images/pic-1.jpg"
  alt="แฮมเบอร์เกอร์"
  title="แฮมเบอร์เกอร์"
  width="100px"
  height="100px"
/>
```

# แทรกคำบรรยายใต้ภาพ

- HTML5 ได้แนะนำองค์ประกอบ \<figure>ใหม่เพื่อให้มีรูปภาพและคำอธิบายภาพ
- \<figure> สำหรับเป็น parent ครอบภาพและคำอธิบายภาพ
- \<figcaption> สำหรับแสดงคำอธิบายภาพ

```html
<figure>
  <img src="images/pic-1.jpg" alt="แฮมเบอร์เกอร์" title="แฮมเบอร์เกอร์" />
  <p>
    <figcaption>แฮมเบอร์เกอร์เมนูนี้ จำหน่ายในราคาเพียง 50 บาท</figcaption>
  </p>
</figure>
```

!["ตัวอย่างการแทรกภาพด้วย img"](example-img.png)

# ข้อคำนึงถึงเกี่ยวกับการแทรกภาพ

- ชนิดไฟล์ที่ถูกต้อง jpg,jpeg, gif, png : หากเป็นสกุลอื่นบราวเซอร์จะไม่แสดงภาพ
- อัตราส่วนของภาพที่เหมาะสม : อัตราส่วนที่กำหนดจะมีผลกับขนาดที่เขียน (width,height) หากกำหนดไม่สัมพันธ์กัน ภาพจะแสดงผลดูแปลก
- ใช้ความละเอียดที่เหมาะสม : ภาพไม่ควรมีขนาดใหญ่จนเกินไปเพราะอาจทำให้ผู้ใช้ดาวโหลดภาพนาน

# Video

สามารถแทรกได้ 2 แบบ

- Host Video Services เป็นการแทรกวีดีโอโดยเรานำ video ที่ต้องการจะแสดง ไปฝากไว้กับ Host Video เช่น youtube, vimo จากนั้นผู้ให้บริการจะให้ code ส่วนแสดงผลมาใช้งาน ข้อดีคือ ตัวเล่นวีดีโอรองรับบราวเซอร์ส่วนใหญ่ มี Feature ที่หลากหลายและลดการใช้แบนด์วิดท์จำนวนมาก
  แต่ก็มีข้อเสียคือ วีดีโอจะต้องถูกอัพโหลดลงใน เว็บไซต์อื่นก่อน บางครั้งเราไม่ต้องการจะทำเช่นนั้น
- ฝังลงในเว็บด้วย video element

# ตัวอย่าง Host Video Services ของ Youtube

![](example-youtube.png)

# ฝังลงในเว็บไซต์ตัวเอง

HTML 5 นำเสนอทางเลือกในการเล่นไฟล์ video แต่มีข้อเสียที่เห็นได้ชัดเลยคือไม่ป้องกันการคัดลอกไฟล์ โดยแต่ละบราวเซอร์จะมีรูปแบบไฟล์ที่สนับสนุนแตกต่างกันดังนี้ครับ

- H264: IE และ Safari
- WebM: Android, Chrome, Firefox, Opera

# ตัวอย่างการใช้ \<video>

```html
<video controls width="250">
  <source src="videos/flower.webm" type="video/webm" />
  <source src="videos/flower.mp4" type="video/mp4" />
  Sorry, your browser doesn't support embedded videos.
</video>
```

![](example-video.png)

ตัวบราวเซอร์จะเลือกเล่นเฉพาะไฟล์ที่ตัวเองสามารถเล่นได้เท่านั้น หาก ไม่สามารถเล่นได้จะแสดงข้อความที่ เรากำหนดไว้

- Sorry, your browser doesn't support embedded videos.

# รายละเอียด \<video> เพิ่มเติม

\<video> เป็นelement สำหรับแสดงวีดีโอ โดยจะทำงานร่วมกับ element source สำหรับการกำหนดชนิดของประเภทไฟล์

- video

  - autoplay เล่นอัตโนมัติ

  - controls
    กำหนดค่าเป็น boolean (false, true) อนุญาติให้ ผู้ใช้สามารถควบคุมวีดีโอ เช่นระดับเสียง และหยุดชั่วคราว/เล่นต่อ

  - width, height
    กำหนดค่าเป็นพิกเซล (px) ความสูงและความกว้างของพื้นที่แสดงผลของวิดีโอ

  - loop
    กำหนดค่าเป็น boolean (false, true) จะเล่นวนซ้ำไปตลอด

  - muted
    กำหนดค่าเป็น boolean (false, true) หากตั้งค่าไว้ เสียงจะถูกปิดในตอนแรก

  - poster
    กำหนดค่าเป็น url สำหรับรูปภาพที่จะแสดงในขณะที่กำลังดาวน์โหลดวิดีโอ หากไม่ได้ระบุแอตทริบิวต์นี้ จะไม่มีอะไรแสดงจนกว่าเฟรมแรกจะพร้อมใช้งาน เฟรมแรกจะแสดงเป็นเฟรมโปสเตอร์

- source

  - src สำหรับแสดงตำแหน่งไฟล์ของ video
  - type ประเภทของ video

# Audio

สามารถแทรกได้ 2 แบบ

- Host video services เช่น soundClound.com, MySpace.com
- ใช้ \<audio>

การรองรับ

- MP3: Safari 5+, Chrome 6+, IE9
- Ogg Vorbis: Firefox 3.6, Chome 6, Opera 1.5, IE9

# ตัวอย่างการใช้ \<audio>

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML5 video.
</video>
```

![](example-audio.png)

ส่วนการกำหนด attibutes อื่นๆนั้น จะเหมือนกับ element video

# ศึกษา video, audio เพิ่มเติม

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
