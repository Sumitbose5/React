
export const PokemonCards = ({ data }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={data.sprites.other.dream_world.front_default}
                    alt={data.name}
                    width={150}
                    height={100}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.name}
                    <div className="badge badge-secondary">{
                        data.types.map((currType) => 
                            currType.type.name
                        )    
                        .slice(0, 2)
                        .join(", ")
                    }</div>
                </h2>
                <p>Height : {data.height}</p>
                <p>Weight : {data.weight}</p>
                <p>Abilities : {
                    data.abilities.map((currAbility) => 
                        currAbility.ability.name
                    )
                    .slice(0, 2)
                    .join(", ")
                }</p>

                <div className="card-title justify-end">
                    <div className="badge badge-outline">Exp : {data.base_experience}</div>
                </div>
            </div>
        </div>
    );
}