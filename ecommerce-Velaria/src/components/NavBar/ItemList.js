import { items } from "./Item"
export function itemsMap(){
    items.map((item)=> <div key={item.id}>
                            <div>
                                <div>
                                    {`${item.nombre} - ${item.categoria}`} 
                                </div>
                                <div>
                                    <img src={item.foto} alt='' />
                                    {item.precio}
                                </div>
                            </div>
    </div>
    )}