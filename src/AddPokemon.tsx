export const AddPokemon = (): JSX.Element => {
    
    return (
        <div>
            <h1>Nouveau Pokémon</h1>
            <form>
                <div>
                    <label>Nom</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Description</label>
                    <textarea />
                </div>
                <div>
                    <label>Image</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Taille</label>
                    <input type="text"/> cm
                </div>
                <div>
                    <label>Poids</label>
                    <input type="text"/> kg
                </div>
                <div>
                    <label>Type</label>
                    <input type="radio" name="type" /> Feu
                    <input type="radio" name="type" /> Glace
                    <input type="radio" name="type" /> Électricité
                    <input type="radio" name="type" /> Vent
                </div>
                <button>Enregistrer</button>
            </form>
        </div>
    );
};

export default AddPokemon;