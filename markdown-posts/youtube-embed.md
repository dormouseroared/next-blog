---
title: 'Youtube embed'
date: 'September 28, 2022'
excerpt: 'How to handle a youtube embed in this nextjs tailwind setup'
cover_image: '/images/posts/img5.jpg'
category: 'TailwindCSS'
author: 'Ferdy'
author_image: 'https://randomuser.me/api/portraits/men/11.jpg'
---
<div class="youtube-video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NX_NW6bt6_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## see nextjs-blog styles globals css and post-11, part of which appears here


# youtube video embed

Copied directly from the youtube share embed option

<iframe width="560" height="315" src="https://www.youtube.com/embed/MrjeefD8sac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Responsive youtube video embed

The above is not responsive.

### first search (not very clear)

[responsive youtube embed](https://avexdesigns.com/blog/responsive-youtube-embed)

### second search

[How to Make YouTube Video Embeds Responsive With CSS](https://techstacker.com/how-to-responsive-youtube-videos/)

If you copy the embed video code from YouTube and in you get an iframe wrapper that looks similar to this (**html is active in this blog so have to take out &lt; and &gt; symbols in plain text, or there will be error messages for invalid html**):

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/uga8GWzdv3c"
  frameborder="0"
  allow="
    accelerometer; 
    autoplay; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture
    "
  allowfullscreen
></iframe>
```

Unfortunately, iframes require a fixed height and width to display with a correct aspect ratio in the browser. This makes iframes incompatible with responsive design out of the box.

Fortunately, you can make your video embeds by wrapping your iframe in a parent container.

**Note that class is used because this is just vanilla html. classname will not work.**

<div class="youtube-video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MrjeefD8sac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Embed a YouTube Video in HTML and Make it Responsive (CSS included)

This is the third search and this time a youtube video that has been seen before. The CSS is similar to the second search. On this occasion, the second version of the CSS will be left in place.

[Embed a YouTube Video in HTML and Make it Responsive (CSS included) &bull; tipswithpunch &bull; 31 May 2018](https://www.youtube.com/watch?v=9YffrCViTVk)

```CSS
.iframe-container{
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
}
.iframe-container iframe{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

## getting rid of horizontal scroll bars

[How to remove Horizontal Scroll Bar🔥🔥 with only one line of code | make your websites responsive.](https://www.youtube.com/watch?v=luV9Mso3cHk)

It certainly needs overflow: hidden

```CSS
body {
    min-height: 100vh;
    width: 100vw;
    background-color: lightgreen;
    overflow-x: hidden;
}
```

## more on getting rid of horizontal scroll bars

[Horizontal scroll bar css fix](https://www.youtube.com/watch?v=_Js193O1PAg)

This one is about box-sizing: border-box

> what does this blockquote look like?

> Probably better now that the bit of css is in the globals.css

> maybe have another look at putting in some CSS to handle markdown converted to html and anywhere else that does similar...

