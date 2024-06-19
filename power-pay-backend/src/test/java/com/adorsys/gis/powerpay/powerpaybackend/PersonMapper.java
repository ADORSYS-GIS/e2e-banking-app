package com.adorsys.gis.powerpay.powerpaybackend;

// PersonMapper.java
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.adorsys.gis.powerpay.powerpaybackend.domain.model.Person;
import com.adorsys.gis.powerpay.powerpaybackend.services.dto.PersonDto;

@Mapper
public interface PersonMapper {
    PersonMapper INSTANCE = Mappers.getMapper(PersonMapper.class);

    @Mapping(source = "name", target = "fullName")
    PersonDto personToPersonDto(Person person);
}