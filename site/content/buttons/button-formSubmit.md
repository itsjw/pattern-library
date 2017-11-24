---
title: Form submit button
desc: For form submission. Basically same as default but has a minimum width.
date: 2017-11-08
category: buttons
tags: ["ui","buttons","forms"]
---
{{< row >}}
{{% column cols="8" %}}
For when you need a button to fill the width of its container. Has a max width to prevent weird looking buttons on larger screens.

{{< highlight html >}}
<button type="submit" class="btn btn--submit">Submit</button>
{{< /highlight >}}
{{% /column %}}
{{% column cols="4" %}}
<button type="submit" class="btn btn--submit">Submit</button>
{{% /column %}}
{{< /row >}}