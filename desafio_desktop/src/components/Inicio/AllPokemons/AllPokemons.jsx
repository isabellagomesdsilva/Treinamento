import './styles.css'
export function AllPokemons(){
    return(
        <div className="AllPokes">
            <div className="HeaderAll">
                <h1>TODOS OS POKEMONS</h1>
            </div>
            <div className="barraPesquisa">
            <label className='labelSearch'>
                <input type='text' name='name' className='inputSearch' placeholder='Buscar por nome do pokémon'/>
                <button className='buttonSearch' >Buscar</button>
              </label>
            </div>
        </div>
    )
}