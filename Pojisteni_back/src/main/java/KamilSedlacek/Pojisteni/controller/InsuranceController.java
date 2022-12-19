package KamilSedlacek.Pojisteni.controller;



import KamilSedlacek.Pojisteni.exceptions.InsuranceNotFoundException;

import KamilSedlacek.Pojisteni.exceptions.UserNotFoundException;
import KamilSedlacek.Pojisteni.model.Insurance;
import KamilSedlacek.Pojisteni.model.User;
import KamilSedlacek.Pojisteni.repository.InsuranceRepository;
import KamilSedlacek.Pojisteni.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class InsuranceController {

    @Autowired
    private InsuranceRepository insuranceRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user/{id}/insurance")
    public ResponseEntity<Insurance> newInsurance(@PathVariable(value = "id") Long id, @RequestBody Insurance newInsurance) {
        Insurance insurance = userRepository.findById(id).map(user -> {
            newInsurance.setUser(user);

            return insuranceRepository.save(newInsurance);
        }).orElseThrow(()->new UserNotFoundException(id));
            return new ResponseEntity<>(insurance, HttpStatus.CREATED);
    }



    @GetMapping("/user/{id}/insurances")
    public ResponseEntity<List<Insurance>> getAllInsurancesByUserId(@PathVariable(value = "id") Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        List<Insurance> insurances = insuranceRepository.findByUserId(id);
        return new ResponseEntity<>(insurances, HttpStatus.OK);

    }

    @GetMapping("/insurances")
    public ResponseEntity<List<Insurance>> getAllInsurances() {
        List<Insurance> insurances = new ArrayList<Insurance>();
        insuranceRepository.findAll().forEach(insurances :: add);
        if(insurances.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        //System.out.println("všechny insurance");

        return new ResponseEntity<>(insurances, HttpStatus.OK);

    }

    @GetMapping("insurance/{id}")
    public ResponseEntity<Insurance> getInsuranceById(@PathVariable (value = "id") Long id) {
        Insurance insurance = insuranceRepository.findById(id)

                .orElseThrow(()-> new InsuranceNotFoundException(id));
        return new ResponseEntity<>(insurance, HttpStatus.OK);
    }

    @PutMapping("user/{userId}/insurance/{insId}")
    public ResponseEntity<Insurance> updateInsurance(@RequestBody Insurance newInsurance, @PathVariable ("userId") Long userId, @PathVariable ("insId") Long insId) {
        Insurance insurance = insuranceRepository.findById(insId)
                .orElseThrow(()-> new InsuranceNotFoundException(insId));
            insurance.setType(newInsurance.getType());
            insurance.setForWhat(newInsurance.getForWhat());
            insurance.setAmount(newInsurance.getAmount());
            insurance.setDayOfStart(newInsurance.getDayOfStart());
            insurance.setDayOfEnd(newInsurance.getDayOfEnd());

        insuranceRepository.save(insurance);

            return ResponseEntity.ok(insurance);

    }
    @DeleteMapping("insurance/{id}")
    public ResponseEntity<HttpStatus> deleteInsurance(@PathVariable ("id") Long id) {
        insuranceRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/user/{id}/insurance")
    public ResponseEntity<List<Insurance>> deleteAllInsurancesOfUser(@PathVariable(value = "id") Long id) {
        if(!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        insuranceRepository.deleteByUserId(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }


}
