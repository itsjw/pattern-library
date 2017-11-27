---
title: Standard button
desc: The default button, used to guide the user towards whatever the primary goal of the page is.
date: 2017-11-20
category: buttons
tags: ["ui","buttons"]
---
{{% rowHeader cols="8,4" labels="Description,Example" %}}

{{< row >}}
{{% column cols="8" %}} 
Default button
{{< highlight html >}}
<button type="button" class="btn">Button</button>
{{< /highlight >}}
{{% /column %}}
{{% column cols="4" %}}
<button type="button" class="btn">Button</button>
{{% /column %}}
{{< /row >}}

{{< row >}}
{{% column cols="8" %}}
Example of a button with a long label.
{{< highlight html >}}
<button type="button"  class="btn">A button with a very long label to show the wrapping</button>
{{< /highlight >}}
{{% /column %}}
{{% column cols="4" %}}
<button type="button" class="btn">A button with a very long label to show the wrapping</button>
{{% /column %}}
{{< /row >}}

{{< row >}}
{{% column cols="8" %}}
Disabled

{{< highlight html >}}
<button type="button" class="btn btn--disabled">Disabled button</button>
{{< /highlight >}}
{{% /column %}}
{{% column cols="4" %}}
<button type="button" class="btn btn--disabled">Disabled button</button>
{{% /column %}}
{{< /row >}}