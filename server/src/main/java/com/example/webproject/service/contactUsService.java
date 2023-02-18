package com.example.webproject.service;
import com.example.webproject.model.contactUs ;
import com.mashape.unirest.http.HttpResponse;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
@Service
public class contactUsService {
    @Value("${mailgun.api-key}")
    private String mailgunApiKey;

    @Value("${mailgun.domain}")
    private String mailgunDomain;

    @Value("${mailgun.from}")
    private String mailgunFrom;

    @Value("${mailgun.to.hamza}")
    private String mailgunToHamza;
    @Value("${mailgun.to.mohamed}")
    private String mailgunToMohamed;
    @Value("${mailgun.to.jawher}")
    private String mailgunTojawher;
    public  String sendingContactUs(contactUs contactUs)  {

            System.out.println(mailgunDomain);
        HttpResponse<String> request = null;
        try {
            request = Unirest.post("https://api.mailgun.net/v3/" + mailgunDomain + "/messages")
                    .basicAuth("api", mailgunApiKey)
                    .queryString("from", contactUs.getEmail())
                    .queryString("to", mailgunToHamza)
                    .queryString("to", mailgunTojawher)
                    .queryString("to", mailgunToMohamed)
                    .queryString("subject", "Contact Us form filled by user: " + contactUs.getEmail())
                    .queryString("text", contactUs.getMessage())
                    .asString();
        } catch (UnirestException e) {
            throw new RuntimeException(e);
        }
        return request.getBody();

    }
}

