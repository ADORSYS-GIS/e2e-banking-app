package com.adorsys.gis.powerpay.powerpaybackend;

public class MapstructTest {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("John Doe");

        PersonDto personDto = PersonMapper.INSTANCE.personToPersonDto(person);

        System.out.println("Person DTO Full Name: " + personDto.getFullName());
    }
}
