export default class Tablero 
{
    constructor()
    {
        this.escaleraIncio = [8, 15, 19, 22, 47, 58, 75, 84];
        this.escaleraFinal = [17, 28, 35, 43, 75, 80, 94, 100];
        this.serpienteIncio = [94, 90, 83, 78, 59, 55, 32, 20];
        this.serpienteFinal = [66, 60, 53, 52, 39, 32, 12, 3];
    }

    comprobar(number)
    {
        let i = 0;
        while(i <this.escaleraIncio.length)
        {
            if(number == this.escaleraIncio[i])
            {
                return this.escaleraFinal[i];
            } 
            else if(number == this.serpienteIncio[i])
            {
                return this.serpienteFinal[i];
            }
            else 
            {
                return number;
            }
            i++;
        }
    }

}
    
