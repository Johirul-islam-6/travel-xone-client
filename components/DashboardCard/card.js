import { useEffect } from "react";
import { useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";


const Card = () => {
    const [boardCard, setBoardCard] = useState([]);

    useEffect(() => {
        fetch(`dashboarcard.json`)
            .then((res) => res.json())
            .then((data) => {
                setBoardCard(data);
                console.log(data);
            });
    }, []);


    return (
        <>
            <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
                {
                    boardCard.map((cards) => {
                        return (
                            <div key={cards.id} className="bg-stone-50 shadow-lg p-5">
                                <div>
                                    <img src={cards.image} className="w-10 h-10 bg-blue-400 rounded-full p-2" />
                                </div>
                                <div className="pt-4 text-xl font-bold text-black">$ <span>{cards.number}</span></div>
                                <div className="block md:flex lg:flex justify-between text-sm text-black">
                                    <div>{cards.title}</div>
                                    <div className="flex justify-start md:justify-between lg:justify-between items-center text-blue-600">{cards.percent} <span className="ml-1"><BiUpArrowAlt /></span></div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>


        </>
    );
}

export default Card;