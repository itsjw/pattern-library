---
title: Input fields
tags: ["forms", "input-types"]
---
### Default form input styles

Form elements will use browser defaults unless the ***.form*** class is declared.

{{< highlight html >}}
<form class="form">
</form>
{{< /highlight >}}

<form class="form margin--top--md">
    <h4>Text input styling.</h4>

    <input placeholder="Enter some text">
    <input disabled="disabled" placeholder="Disabled text input">
    <input placeholder="Error" class="With error">
</form>

{{< highlight html >}}
    <input placeholder="Enter some text">
    <input disabled="disabled" placeholder="Disabled text input">
    <input placeholder="Error" class="With error">
{{< /highlight >}}

<hr>

<form class="form margin--top--md">
    <h4>Text area</h4>
    <textarea placeholder="Enter some text"></textarea>  
    <textarea class="locked" placeholder="Enter some text">This textarea is locked so the user can't resize it (this is bad for usability so avoid if you can)</textarea>    
</form>

{{< highlight html >}}
    <textarea placeholder="Enter some text"></textarea>  
    <textarea class="locked" placeholder="Enter some text">This textarea is locked so the user can't resize it (this is bad for usability so avoid if you can)</textarea>    
{{< /highlight >}}

<hr>

<form class="form">
    <h4>Radio buttons</h4>
    <div class="options options--radio">
        <div class="option">            
            <input type="radio" id="xx948fjl" name="f894kid[]">
            <label for="xx948fjl" class="selectable">The first option</label>
        </div>
        <div class="option">       
            <input type="radio" id="f84jkd" name="f894kid[]">
            <label for="f84jkd" class="selectable">The second option</label>
        </div>
        <div class="option">     
            <input type="radio" id="u3hjdo" name="f894kid[]">   
            <label for="u3hjdo" class="selectable">The third option</label>
        </div>
    </div>
</form>

{{< highlight html >}}
    <div class="options options--radio">
        <div class="option">            
            <input type="radio" id="xx948fjl" name="f894kid[]">
            <label for="xx948fjl" class="selectable">The first option</label>
        </div>
        <div class="option">       
            <input type="radio" id="f84jkd" name="f894kid[]">
            <label for="f84jkd" class="selectable">The second option</label>
        </div>
        <div class="option">     
            <input type="radio" id="u3hjdo" name="f894kid[]">   
            <label for="u3hjdo" class="selectable">The third option</label>
        </div>
    </div>
{{< /highlight >}}

<hr>

<form class="form">
    <h4>Checkboxes</h4>
    <div class="options options--checkbox">
        <div class="option">
            <input type="checkbox" id="lr94k">
            <label for="lr94k" class="selectable">The first option</label>
        </div>
        <div class="option">
            <input type="checkbox" id="3478jf">
            <label for="3478jf" class="selectable">The second option</label>
        </div>
        <div class="option">
            <input type="checkbox" id="lsdui34">   
            <label for="lsdui34" class="selectable">The third option</label>
        </div>
    </div>
</form>

{{< highlight html >}}
<div class="options options--checkbox">
    <div class="option">
        <input type="checkbox" id="lr94k">
        <label for="lr94k" class="selectable">The first option</label>
    </div>
    <div class="option">
        <input type="checkbox" id="3478jf">
        <label for="3478jf" class="selectable">The second option</label>
    </div>
    <div class="option">
        <input type="checkbox" id="lsdui34">   
        <label for="lsdui34" class="selectable">The third option</label>
    </div>
</div>
{{< /highlight >}}

<hr>

<form class="form">
    <h4>Select box</h4>

    <select>
        <option>Hooley</option>
        <option>Dooley</option>
        <option>Wooley</option>
        <option>Booley</option>
    </select>
</form>
