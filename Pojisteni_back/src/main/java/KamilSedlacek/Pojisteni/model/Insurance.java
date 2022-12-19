package KamilSedlacek.Pojisteni.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "insurance")
public class Insurance {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)

    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "userId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;

    @Column(name = "type")
    private String type;

    @Column(name = "forWhat")
    private String forWhat;

    @Column(name = "amount")
    private Long amount;

    //předělat na Date
    @Column(name = "dayOfStart")
    private String dayOfStart;

    //předělat na Date
    @Column(name = "dayOfEnd")
    private String dayOfEnd;


    public Insurance(User user, String type, String forWhat, Long amount, String dayOfStart, String dayOfEnd) {

        this.user = user;
        this.type = type;
        this.forWhat = forWhat;
        this.amount = amount;
        this.dayOfStart = dayOfStart;
        this.dayOfEnd = dayOfEnd;
    }

    public Insurance() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getForWhat() {
        return forWhat;
    }

    public void setForWhat(String forWhat) {
        this.forWhat = forWhat;
    }

    public String getDayOfStart() {
        return dayOfStart;
    }

    public void setDayOfStart(String dayOfStart) {
        this.dayOfStart = dayOfStart;
    }

    public String getDayOfEnd() {
        return dayOfEnd;
    }

    public void setDayOfEnd(String dayOfEnd) {
        this.dayOfEnd = dayOfEnd;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }
}
