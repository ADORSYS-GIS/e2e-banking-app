# Introduction to Lombok in Spring Boot
Lombok is a powerful Java library that simplifies the development of Spring Boot applications by reducing boilerplate code. It offers a set of annotations that can be applied to classes, resulting in the automatic generation of code during compilation. This documentation explores how Lombok can streamline Spring Boot development, enhance code readability, and improve productivity.

# Exlanation of Boilerplate Code
Boilerplate code refers to sections of code that are repetitive, standardized, and necessary for a certain functionality or structure, but do not contribute directly to the unique logic or business requirements of the program. It includes common patterns, declarations, and configurations that are written repeatedly throughout the codebase.

Boilerplate code can be time-consuming to write, prone to errors and inconsistencies, and can make the codebase larger and harder to maintain. Examples of boilerplate code include defining getters and setters, implementing constructors etc.

# How Lombok reduces boilerplate code
Lombok helps to reduce boilerplate code by automatically generating common code constructs, eliminating the need for developers to write them manually. Here's how Lombok achieves this:

1. Annotations: Lombok provides a set of annotations that can be applied to classes, fields, and methods. These annotations trigger the generation of code during compilation.

2. Code Generation: When the Lombok annotations are applied, Lombok's annotation processor kicks in during the compilation process. It analyzes the annotated elements and generates the corresponding code based on the annotations.

For example, @Getter and @Setter annotations generate getter/setter methods for all fields in a class. Similarly, the @ToString annotation generates a toString() method, and the @NoArgsConstructor annotation generates a no-argument constructor.

# Getting Started with Lombok

## 1. Installation of Lombok
To start using Project Lombok, you need to first install it. There are several ways to install Lombok, but the most common one is through Maven or Gradle.

### Installing Lombok with Maven
To install Lombok with Maven, add the following dependency to your pom.xml file:
```java
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.30</version>
    <scope>provided</scope>
</dependency>
```

### Installing Lombok with Gradle
To install Lombok with Gradle, add the following dependency to your build.gradle file:
```java
dependencies {
    compileOnly 'org.projectlombok:lombok:1.18.30'
    annotationProcessor 'org.projectlombok:lombok:1.18.30'
}
```

## 2. Setting up Lombok in the IDE
After installing Lombok, you need to set it up in your IDE. Below are instructions for setting up Lombok in popular IDEs like IntelliJ IDEA and VSCode.

### Setting up Lombok in IntelliJ IDEA
1. Open IntelliJ IDEA and navigate to File > Settings.
2. In the Settings window, go to Build, Execution, Deployment > Compiler > Annotation Processors.
3. Check the box next to "Enable annotation processing".
4. Under "Annotation Processors", click the "+" button to add a new annotation processor.
5. In the "Create New Annotation Processor" window, enter the following information:
    - Name: Lombok
    - Processor path: [path_to_lombok_jar]/lombok-1.18.20.jar
    - Output directory: [path_to_project]/target/generated-sources/lombok
    - Processor options: lombok.addLombokGeneratedAnnotation=true
6. Click "OK" to save the new annotation processor.
7. Close the Settings window and rebuild your project.

### Setting up Lombok in VSCode
1. Install the Lombok plugin for VSCode.
2. Open your project in VSCode and go to the Settings tab.
3. Search for "lombok.config.path" and set the value to ${workspaceFolder}/lombok.config.
4. Create a new file named lombok.config in the root directory of your project.
5. Add the following line to the lombok.config file: lombok.addLombokGeneratedAnnotation=true.
6. Save the lombok.config file and rebuild your project.

# Lombok Annotations for Spring Boot
Lombok offers various annotations that can significantly reduce boilerplate code in Spring Boot projects. Let's explore some commonly used annotations:

1. @Getter and @Setter: Automatically generates getter and setter methods for class fields.
2. @NoArgsConstructor and @AllArgsConstructor: Generates no-args and all-args constructors, respectively.
3. @Data: Combines @Getter, @Setter, @ToString, @EqualsAndHashCode, and @RequiredArgsConstructor together, providing a convenient way to generate all of them at once.
4. @Builder: Generates a builder pattern for creating instances of the class.
5. @Value: Generates an immutable class with final fields, getters, and a constructor.
6. @Slf4j: Generates a logger instance using SLF4J.
7. @Entity and @Table (for JPA entities): Generates necessary JPA annotations for entity classes.

# Example usage
a. @Getter, @Setter:
When a field is annotated with @Getter and/or @Setter, Lombok will automatically generate the default getter and/or setter, respectively. The default implementation for getters simply takes care of returning the annotated field. Similarly, the default implementation for setters takes one parameter of the same type as the annotated field and simply sets it with the received value. When a field called value is annotated with both @Getter and @Setter, Lombok will define a getValue() (or isValue() if the field is boolean), and a setValue() method. The generated getter/setter method will be public, unless a particular AccessLevel is specified. The allowed AccessLevel values are PUBLIC, PROTECTED, PACKAGE, and PRIVATE.  Note that we can also annotate the entire class. In this case, this logic will be applied to each field.

- With Lombok:
```java
@Getter
@Setter
public class Author {
    private int id;
    private String name;
    @Setter(AccessLevel.PROTECTED)
    private String surname;
}
```

- With Java Vanilla:
```java
public class User {
    private int id;
    private String name;
    private String surname;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    protected void setSurname(String surname) {
        this.surname = surname;
    }
}
```

b. @NonNull:
We can annotate with @NonNull a record component, a parameter of a method, or an entire constructor. This way, Lombok will generate null-check statements for you accordingly.

- With Lombok:
```java
public class Author {
    private int id;
    private String name;
    private String surname;

    public Author(
      @NonNull int id,
      @NonNull String name,
      String surname
    ) {
      this.id = id;
      this.name = name;
      this.surname = surname; 
  }
}
```

- With Java Vanilla:
```java
public class Author {
    private int id;
    private String name;
    private String surname;

    public Author(
      int id,
      String name,
      String surname
    ) {
        if (id == null) {
          throw new NullPointerException("id is marked @NonNull but is null");
        }
        this.id = id;
        if (name == null) {
          throw new NullPointerException("name is marked @NonNull but is null");
        }
        this.name = name;
        this.surname = surname; 
  }
}
```

c. @Data:
@Data is a shortcut annotation that combines the features of @ToString, @EqualsAndHashCode, @Getter @Setter, and @RequiredArgsConstructor together. So, @Data generates all the boilerplate involved in POJOs (Plain Old Java Objects). This means, in particular, getters for all fields, setters for all non-final fields, proper toString, equals, and hashCode implementations involving every field of the class, and a constructor for all final fields.

- With Lombok:
```java
@Data
public class Author {
    private final int id;
    private String name;
    private String surname;
}
```

- With Java Vanilla:
```java
public class Author {
    private final int id;
    private String name;
    private String surname;

    public Author(int id) {
        this.id = id;
    }    

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    @Override 
    public int hashCode() {
       final int PRIME = 31;
       int result = 1;
       result = prime * result + getId();
       result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
       result = prime * result + ((getSurname() == null) ? 0 : getSurname().hashCode());
       return result;
    }

    @Override 
    public boolean equals(Object o) {
       if (o == this) return true;
       if (!(o instanceof Author)) return false;
       Author other = (Author) o;
       if (!other.canEqual((Object)this)) return false;
       if (this.getId() == null ? other.getId() != null : !this.getId().equals(other.getId())) return false;
       if (this.getName() == null ? other.getName() != null : !this.getName().equals(other.getName())) return false;
       if (this.getSurname() == null ? other.getSurname() != null : !this.getSurname().equals(other.getSurname())) return false;
       return true;
    }
}
```

d. @ToString:
When a class is annotated with @ToString, Lombok will take care of generating a proper implementation of the toString() method. By default, a String containing the class name, followed by each field's value separated by a comma, will be returned. By setting the includeFieldNames parameter to true, the name of each field will be placed before its value. By default, all non-static fields will be considered when generating the toString() method. Annotate a field with @ToString.Exclude to make Lombok ignore it. Alternatively, you can specify which fields you wish to be taken into account by using @ToString(onlyExplicitlyIncluded = true). Then, mark each field you want to include with @ToString.Include.

- With Lombok:
```java
@ToString(includeFieldNames=true)
public class Author {
    private int id;
    private String name;
    private String surname;
}
```

- With Java Vanilla:
```java
public class Author {
    private int id;
    private String name;
    private String surname;

    @Override 
    public String toString() {
      return "Author(id=" + this.id + ", name=" + this.name + ", surname=" + this.surname + ")";
  }
}
```

e. @NoArgsConstructor, @RequiredArgsConstructor, @AllArgsConstructor:
When a class is annotated with @NoArgsConstructor, Lombok will take care of automatically generating a constructor with no parameters. Likewise, when annotated with @AllArgsConstructor, a constructor with one parameter for each field in your class will be generated. Similarly, @RequiredArgsConstructor leads to a constructor with a parameter for each field requiring special handling. In particular, this involves non-initialized final fields, as well as any fields marked as @NonNull that are not initialized where declared. Do not forget that static fields will be ignored by these annotations.

- With Lombok:
```java
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
public class Author {
    private int id;
    private String name;
    private String surname;
    private final String birthPlace;
}
```

- With Java Vanilla:
```java
public class Author {
    private int id;
    private String name;
    private String surname;
    private final String birthPlace;

    // @NoArgsConstructor
    public Author() {}

    // @AllArgsConstructor
    public Author(int id, String name, String surname, String birthPlace) {
      this.id = id
      this.name = name
      this.surname = surname
      this.birthPlace = birthPlace
    }

    // @RequiredArgsConstructor
    public Author(String birthPlace) {
      this.birthPlace = birthPlace
    }
}
```

### Example: Using Lombok Annotations with Composition and Lists

In this example, I am demonstrating how to use Lombok annotations in combination with composition and lists to create `Car` and `Engine` objects.

a. Engine class:
```java
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@ToString
public class Engine {
    private String type;
    private int power;
}
```

b. Car class:
```java
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@ToString
public class Car {
    private String make;
    private String model;
    private List<Engine> engine;
}
```

In this example, we have the Car class and the Engine class, both of which utilize Lombok annotations to reduce boilerplate code.

To demonstrate the usage of these classes, we create three Engine objects (engine1, engine2, engine3) and add them to a List<Engine>. Then, we create a Car object named car1 with the provided make, model, and engine list. Finally, we print the car1 object, which triggers the toString() method and displays the string representation of the object.

```java
package com.example.demo1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.demo1.lomboktest.*;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class Demo1Application {
	public static void main(String[] args) {
		SpringApplication.run(Demo1Application.class, args);
		Engine engine1 = new Engine("V6", 300);
		Engine engine2 = new Engine("V8", 400);
		Engine engine3 = new Engine("Electric", 500);

		List<Engine> engine = new ArrayList<>();
		engine.add(engine1);
		engine.add(engine2);

		Car car1 = new Car("Ford", "Mustang", engine);
		System.out.println(car1);

	}

}
```

When you run this code, it will output the string representation of the car1 object, which includes the make, model, and engine list.

```java
Car(make=Ford, model=Mustang, engine=[Engine(type=V6, power=300), Engine(type=V8, power=400), Engine(type=Electric, power=500)])
```

# Best Practices and Common Pitfalls:

## 1. Best Practices
Here are some best practices for using Lombok annotations:
- Use Lombok only when it helps to reduce boilerplate code significantly.
- Always include a clear description of the behavior of your class, especially when using Lombok annotations that generate methods, such as @Getter or @Setter.
- Use @NoArgsConstructor only for non-abstract classes where it makes sense to have an instance with default values.
- Be careful when using @EqualsAndHashCode classes with collections or circular references. Consider providing an implementation for equals() and hashCode() manually.
- Use @Builder when you need to create complex objects with many properties.
- Avoid using @Data annotation for large classes or entities with many fields. In such cases, it is better to explicitly define the required methods with @Getter @Setter annotations.
- Use @NonNull and @Nullable to specify whether a parameter or a return value can be null or not.

## Common Pitfalls
- Be aware of the side effects of Lombok annotations. For example, @Data generates all methods for you, including equals(), hashCode(), and toString(). Make sure you understand what code is being generated and how it works.
- Use the latest version of Lombok to avoid potential bugs and issues.
- Lombok annotations may not work correctly with some IDEs or build tools. Make sure to test your code thoroughly before deploying it to production.

# Conclusion
In conclusion, Lombok is a valuable tool for Spring Boot development, offering automatic code generation to reduce boilerplate code. By leveraging Lombok's annotations, developers can save time and effort by eliminating the need to write repetitive code such as getters and setters, constructors, builder patterns, and logging statements. This results in cleaner and more concise code, improved productivity, and enhanced code maintainability. Adopting Lombok in Spring Boot projects can streamline the development process, allowing developers to focus on the core logic and requirements of their applications.

# References:
- Official Lombok documentation: https://projectlombok.org/
- Lombok with Spring Boot tutorial: https://www.baeldung.com/intro-to-project-lombok
- Techwasti article on lombok: https://techwasti.com/project-lombok-complete-guide-for-java-developer
- Auth0 article on lombok: https://auth0.com/blog/a-complete-guide-to-lombok/
