package KamilSedlacek.Pojisteni.controller;


import KamilSedlacek.Pojisteni.exceptions.UserNotFoundException;
import KamilSedlacek.Pojisteni.model.User;


import KamilSedlacek.Pojisteni.repository.PagingUserRepository;
import KamilSedlacek.Pojisteni.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")

public class UserController {

    @Autowired
    private UserRepository userRepository;
    /*
    @Autowired
    private PagingUserRepository pagingUserRepository;
*/






    @PostMapping("user")
    public ResponseEntity<User> newUser(@RequestBody User newUser) {
        User user = userRepository.save(newUser);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/users")
    public ResponseEntity <List<User>> getAllUsers(){

        List<User> users = new ArrayList<User>();
        userRepository.findAll().forEach(users :: add);
        if(users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        //System.out.println("všechny user");
        return new ResponseEntity<>(users, HttpStatus.OK);
    }


    @GetMapping("user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable ("id") Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping("user/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User newUser, @PathVariable ("id") Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));


                    user.setLastname(newUser.getLastname());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setTel(newUser.getTel());
                    user.setStreet(newUser.getStreet());
                    user.setCity(newUser.getCity());
                    user.setZip(newUser.getZip());
                    return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);

    }

    @DeleteMapping("user/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable ("id") Long id) {
        if(!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        //insuranceRepository.deleteByUserId(id);
        userRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
