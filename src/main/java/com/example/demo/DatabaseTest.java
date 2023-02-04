package com.example.demo;
import java.util.List ;
import java.util.Map ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class DatabaseTest {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void testConnection() {
        try {
            List<Map<String,Object>> result = jdbcTemplate.queryForList("select * from bus") ;
            for(Map<String,Object> row : result){
                System.out.println(row) ;
            }
        } catch (Exception e) {
            System.out.println("Database connection test failed: " + e.getMessage());
        }
    }
}



