---
title: Button with icon
desc: Standard button with an icon
tags: ["ui","buttons"]
---
{{% rowHeader cols="8,4" labels="Description,Example" %}}

<!-- Normal button with icon on left -->
{{< row >}}
{{% column cols="3" %}}
Button with icon on left
{{% /column %}}
{{% column cols="6" %}}
{{< highlight html >}}
<button type="button" class="btn">
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
    Icon before    
</button>
{{< /highlight >}}
{{% /column %}}
{{% column cols="3" %}}
<button type="button" class="btn">
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
    Icon before
</button>
{{% /column %}}
{{< /row >}}

<!-- Normal button with icon on left -->
{{< row >}}
{{% column cols="3" %}}
Button with icon on right
{{% /column %}}
{{% column cols="6" %}}
{{< highlight html >}}
<button type="button" class="btn">
    Icon after
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
</button>
{{< /highlight >}}
{{% /column %}}
{{% column cols="3" %}}
<button type="button" class="btn">
    Icon after
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
</button>
{{% /column %}}
{{< /row >}}

<!-- Normal button with icon on either side -->
{{< row >}}
{{% column cols="3" %}}
Button with icon at both ends
{{% /column %}}
{{% column cols="6" %}}
{{< highlight html >}}
<button type="button" class="btn">
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
    Book-end icons
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
</button>
{{< /highlight >}}
{{% /column %}}
{{% column cols="3" %}}
<button type="button" class="btn">
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
    Book-end icons
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
</button>
{{% /column %}}
{{< /row >}}

<!-- Small button with icon -->
{{< row >}}
{{% column cols="3" %}}
Button with icon at both ends
{{% /column %}}
{{% column cols="6" %}}
{{< highlight html >}}
<button type="button" class="btn btn--small">
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
    Little button
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
</button>
{{< /highlight >}}
{{% /column %}}
{{% column cols="3" %}}
<button type="button" class="btn btn--small">
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
    Little button
    <svg viewbox="0 0 100 100" height="16">
        <rect x="0" y="0" width="100" height="100" fill="currentColor"></rect>
    </svg>
</button>
{{% /column %}}
{{< /row >}}
