---
title: Block button
desc: When you want the button to fill the available space of its container
date: 2017-11-08
category: buttons
tags: ["ui","buttons"]
---
{{< row >}}
{{% column cols="8" %}}
For when you need a button to fill the width of its container. Has a max width to prevent weird looking buttons on larger screens.

{{< highlight html >}}
<button type="button" class="btn btn--block">Button</button>
{{< /highlight >}}
{{% /column %}}

{{% column cols="4" %}}
<button type="button" class="btn btn--block">Button</button>
{{% /column %}}
{{< /row >}}