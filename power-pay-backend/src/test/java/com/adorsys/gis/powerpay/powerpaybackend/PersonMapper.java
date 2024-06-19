package com.adorsys.gis.powerpay.powerpaybackend;

// PersonMapper.java
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface PersonMapper {
    PersonMapper INSTANCE = Mappers.getMapper(PersonMapper.class);

    @Mapping(source = "name", target = "fullName")
    PersonDto personToPersonDto(Person person);
}