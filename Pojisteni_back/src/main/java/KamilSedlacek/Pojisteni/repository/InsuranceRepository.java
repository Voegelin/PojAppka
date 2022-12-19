
package KamilSedlacek.Pojisteni.repository;

import KamilSedlacek.Pojisteni.model.Insurance;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;


public interface InsuranceRepository extends JpaRepository <Insurance, Long> {
    List<Insurance> findByUserId(Long userId);

    @Transactional
    void deleteByUserId(Long userId);


}