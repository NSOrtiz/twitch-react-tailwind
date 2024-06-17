import Game from "./GamesCard"

export default function Games(){
    const gamesData=[
        {name: 'Just Chatting', picture:'https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg', views: '224K viewers', tags:['IRL'], type: 'old' },
        {name: 'Rust', picture: 'https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg', views: '103K viewers', tags:['FPS', 'Shooter', 'RPG' ], type: 'old'},
        {name: 'League of Legends', picture:'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg', views: '56.8K viewers', tags:['Strategy', 'RPG', 'MOBA'], type: 'old'},
        {name: 'VALORANT', picture:'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg', views: '59.4K viewers', tags:['FPS', 'Shooter', 'Action'], type: 'new'},
        {name: 'Minecraft', picture: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg', views: '12K viewers', tags:['Simulation'], type: 'old'},
        {name: 'Special Events', picture:'https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg', views: '808K viewers', tags:['IRL'], type: 'new'},
        {name: 'ELDEN RING', picture:'https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg', views: '72.3K viewers', tags:['RPG', 'Adventure'], type: 'old'},
        {name: 'Fortnite', picture: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg', views: '33.9K viewers', tags:['Shooter', 'RPG' ], type: 'old'},
        {name: 'Call of Dutty: Warzone', picture:'https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg', views: '37.1K viewers', tags:['FPS', 'Shooter', 'Action'], type: 'new'},
        {name: 'Diablo IV', picture:'https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg', views: '6.3K viewers', tags:['RPG', 'Action', 'Horror'], type: 'old'},
        {name: 'Panicore', picture: 'https://static-cdn.jtvnw.net/ttv-boxart/1712837864_IGDB-285x380.jpg', views: '12K viewers', tags:['Adventure'], type: 'new'},
        {name: 'The Last of US Part II', picture:'https://static-cdn.jtvnw.net/ttv-boxart/1535225577_IGDB-285x380.jpg', views: '86K viewers', tags:['Shooter'], type: 'old'},
    ];
    return <section className="w-full h-full grid grid-cols-2 md:grid-col-3 lg:grid-cols-5">
        {
            gamesData.map((data)=>{
                return(
                    <Game
                    key={`card-${data.name}`}
                    picture={data.picture}
                    name={data.name}
                    views={data.views}
                    type={data.type}
                />
                )
            })
        }
    </section>
}