const items = [
    {id: 1, foto:'../../../Imagenes/Sentey-24-pulgadas.jpg', categoria:'Monitor', nombre:'Sentey LED 24 144Hz MS-2401 IPS 1Ms Audio HDMI/DP', precio:'$43.899'},
    {id: 2, foto:'../../../Imagenes/Philips-22-pulgadas.jpg', categoria:'Monitor', nombre:'Monitor Philips Pc Monitor Pc 22', precio:'$20.999'},
    {id: 3, foto:'../../../Imagenes/ViewsSonic-27-pulgadas.jpg', categoria:'Monitor', nombre:'Monitor gamer curvo ViewSonic VX2768-PC-mhd led 27 " negro', precio:'$52.746'},
    {id: 4, foto:'../../../Imagenes/Lg-19-pulgadas.jpg', categoria:'Monitor', nombre:'Monitor gamer LG 20MK400H led 19.5 "', precio:'$19.790'}
];

export const Item = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(items)}, 2000)
})