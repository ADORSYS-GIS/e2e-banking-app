package com.adorsys.gis.powerpay.powerpaybackend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MapstructTest {

    @Test
    public void testmapStruct() {
        Person person = new Person();
        person.setName("John Doe");

        PersonDto personDto = PersonMapper.INSTANCE.personToPersonDto(person);

        System.out.println("Person DTO Full Name: " + personDto.getFullName());
    }
}
