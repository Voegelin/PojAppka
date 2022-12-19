package KamilSedlacek.Pojisteni.repository;

import KamilSedlacek.Pojisteni.model.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository <User, Long> {

}
