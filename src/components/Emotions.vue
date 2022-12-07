<template>
    <div class="wrapper">
        <header>
        <h1>{{title}}</h1>
        </header>
        <div class="columns">
            <Checkbox text="happy" />
            <Checkbox text="sad" />
            <Checkbox text="stressed" />
            <Checkbox text="scared" />
            <Checkbox text="embarassed" />
            <Checkbox text="confident" />
            <Checkbox text="horny" />
            <Checkbox text="cozy" />
            <Checkbox text="queer" />
            <Checkbox text="angry" />
            <Checkbox text="lonely" />
            <Checkbox text="hungry" />
            <Checkbox text="silly" />
            <Checkbox text="flirty" />
            <Checkbox text="melancholic" />
        </div>
    </div>
</template>

<script>
import Checkbox from './Checkbox.vue'
    export default{
        name: 'Index',
        props: {
            title: String,
        },
        components: {
            Checkbox
        }
    }
</script>

<style scoped>
    header{
        text-align: center;
        margin: 50px;
    }
    span{ margin-top: 0;}

    span > input{
        background-color: lightgrey;
    }
    .columns{
        font-style: italic;
        text-align:left;
        column-count: 3;
        column-width: 100px;
        column-gap: 0em;
        margin: 20px;
        /* shorthand: columns: 250px 3; */
    }

    button {
		background: #7c7c7c2b;
		margin: 0.5em;
		border-radius: 50%;
		border: none;
		height: 44px;
		width: 44px;
		outline: none;
		color: white;
		cursor: pointer;
		transition: 0.2s ease-in-out;
	}
    
    /* button{ 
        align-self: center;
        cursor: pointer;
        border-radius: 20px;
        background-color: black;
        border: none;
        color: white;
        padding: 10px 50px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        } */
</style>