---
title: An example form
desc: Example forms
tags: ["forms","ui"]
---
<form class="form">
    <h4>Example form</h4>

    <div class="form__question">
        <div class="question__text">Here's the question</div>

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
    </div>
    <div class="form__question">
        <div class="question__text">When were you born?</div>

        <div class="input__container input__container--xs input__container--inline">
            <input type="number" placeholder="DD">
        </div>
        <div class="input__container input__container--xs input__container--inline">
            <select>
                <option>1995</option>
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
            </select>
        </div>
        <div class="input__container input__container--xs input__container--inline">
            <input type="number" placeholder="YYYY">
        </div>
    </div>
    <button class="btn">Submit</button>
</form>

<hr>

<form class="form">
    <h4>Form that cannot be submitted yet</h4>

    <div class="form__question">
        <div class="question__text">When were you born?</div>

        <div class="input__container input__container--xs input__container--inline">
            <input type="number" placeholder="DD">
        </div>
        <div class="input__container input__container--xs input__container--inline">
            <select>
                <option>1995</option>
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
            </select>
        </div>
        <div class="input__container input__container--xs input__container--inline">
            <input type="number" placeholder="YYYY">
        </div>
    </div>
    <button class="btn" disabled="disabled">Submit</button>
</form>