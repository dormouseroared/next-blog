import Axios from "axios"
import Image from "next/image"

export async function getStaticProps() {
    const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")


    return {
        props: {
            coinData: data.data
        }
    }
}

export default function CoinListPage({ coinData }) {

    console.log(coinData)

    return (
        <>
            <div>CoinListPage</div>

            {coinData.coins.map((coin) => {
                return (
                    <div key={coin.id}>
                        <p>{coin.id} {coin.price}</p>
                        <Image src={coin.icon} alt="" height={50} width={50}/>
                    </div>
                )
            })}
        </>
    )
}
