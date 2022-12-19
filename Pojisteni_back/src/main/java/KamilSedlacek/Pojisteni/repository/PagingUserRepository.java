package KamilSedlacek.Pojisteni.repository;

import KamilSedlacek.Pojisteni.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PagingUserRepository extends JpaRepository<User, Long> {

    Page<User> findByLastname(String lastname, Pageable pageable);
}
