package KamilSedlacek.Pojisteni.exceptions;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id){
        super("Nenalezena osoba s id: " + id);
    }
}
