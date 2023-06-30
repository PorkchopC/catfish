<script lang="ts">
    import type { Fish } from "../../models/fish/Fish";

    export { fish, width, height };

    let fish: Fish | undefined,
        width: string = "180px",
        height: string = "120px";
</script>

<svg
    fill="#000000"
    {width}
    {height}
    viewBox="3 3 18 17"
    id="fish"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    class="icon line-color"
    ><path
        id="primary"
        d="M14.5,7A9.93,9.93,0,0,0,8.1,9.74,4.83,4.83,0,0,0,6.77,8.55,3.65,3.65,0,0,0,3,8.51,4.14,4.14,0,0,0,5.08,12,4.14,4.14,0,0,0,3,15.49a3.65,3.65,0,0,0,3.77,0A4.83,4.83,0,0,0,8.1,14.26,9.93,9.93,0,0,0,14.5,17c5,0,6.5-5,6.5-5S19.5,7,14.5,7Z"
        style="fill: #89CFF0; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1;"
    />
    <text font-size="2px" x="6.5" y="13"
        ><tspan>{fish?.name}</tspan>
        <tspan>Size:{fish?.size}</tspan></text
    ></svg
>
