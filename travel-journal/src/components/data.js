import MtFuji from '../images/MtFuji.jpg';
import SydneyOperaHouse from '../images/sydney-opera-house.jpeg'
import Geirangerfjord from '../images/geirangerfjord.jpeg'
import TajMahal from '../images/taj-mahal.jpeg'
import StatueOfLiberty from '../images/statue-of-liberty.jpeg'



const data = [
    {
        id: 1,
        title: "Mount Fuji",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        coverImg: MtFuji,
        location: {
            name: "JAPAN",
            link: "https://goo.gl/maps/8ZUBxKbRLoAz1qVT8"
        },
        date: "12 Jan, 2021 - 24 Jan, 2021"
    },
    {
        id: 2,
        title: "Sydney Opera House",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        coverImg: SydneyOperaHouse,
        location: {
            name: "AUSTRALIA",
            link: "https://goo.gl/maps/bcCCwENqmqM81icy5"
        },
        date: "27 May, 2021 - 8 Jun, 2021"
    },
    {
        id: 3,
        title: "Geirangerfjord",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        coverImg: Geirangerfjord,
        location: {
            name: "NORWAY",
            link: "https://goo.gl/maps/u2qcANKvauPL4kMw8"
        },
        date: "01 Oct, 2021 - 18 Nov, 2021"
    },
    {
        id: 4,
        title: "Taj Mahal",
        description: "The Taj Mahal is an ivory-white marble mausoleum. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628-1658) to house the tomb of his favourite wife, Mumtaz Mahal; and himself.",
        coverImg: TajMahal,
        location: {
            name: "INDIA",
            link: "https://goo.gl/maps/7A7SZHiir3G5jzAN7",
        },
        date: "04 Dec, 2021 - 22 Dec, 2021"
    },
    {
        id: 5,
        title: "Statue Of Liberty",
        description: "The copper statue, was a gift from the people of France. The statue was dedicated on October 28, 1886. The statue is a figure of Libertas, the Roman Goddess of Liberty.",
        coverImg: StatueOfLiberty,
        location: {
            name: "USA",
            link: "https://goo.gl/maps/8vu6hHTYykTgzibB8",
        },
        date: "03 Jan, 2022 - 10 Jan, 2022"
    }
]

export default data;