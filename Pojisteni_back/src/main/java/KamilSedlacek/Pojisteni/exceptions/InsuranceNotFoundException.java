package KamilSedlacek.Pojisteni.exceptions;

public class InsuranceNotFoundException extends RuntimeException{

    public InsuranceNotFoundException(Long id){
        super("Nenalezeno pojištění s id: " + id);
    }
}
