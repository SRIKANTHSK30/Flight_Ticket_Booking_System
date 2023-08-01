//package app;
//
//import java.util.List;
//import java.util.Scanner;
//
//import model.Driver;
//import service.DriverService;
//import service.VehicleService;
//
//public class DriverManagementApp {
//    private static DriverService driverService = new DriverService();
//    private static VehicleService  vehicleService= new VehicleService();
//
//    public static void main(String[] args) {
//        // Rest of the main application code
//        Scanner scanner = new Scanner(System.in);
//        int choice;
//
//        do {
//            System.out.println("\n====== Driver Management Software ======");
//            System.out.println("1. Add Driver");
//            System.out.println("2. View All Drivers");
//            System.out.println("3. Exit");
//            System.out.print("Enter your choice (1-3): ");
//            choice = scanner.nextInt();
//            scanner.nextLine(); // Consume the newline character
//
//            switch (choice) {
//                case 1:
//                    addDriverDetails();
//                    break;
//                case 2:
//                    viewAllDrivers();
//                    break;
//                case 3:
//                    viewAllDrivers();
//                    break;
//                    
//                case 4:
//                    System.out.println("Exiting...");
//                    break;
//                default:
//                    System.out.println("Invalid choice. Please try again.");
//            }
//        } while (choice != 3);
//    }
//
//    private static void addDriverDetails() {
//        Scanner scanner = new Scanner(System.in);
//        System.out.print("Enter driver name: ");
//        String name = scanner.nextLine();
//        System.out.print("Enter driver address: ");
//        String address = scanner.nextLine();
//        System.out.print("Enter driver mobile: ");
//        String mobile = scanner.nextLine();
//        System.out.print("Enter driver license: ");
//        String license = scanner.nextLine();
//
//        Driver newDriver = new Driver();
//        newDriver.setName(name);
//        newDriver.setAddress(address);
//        newDriver.setMobile(mobile);
//        newDriver.setLicense(license);
//
//        driverService.addDriver(newDriver);
//
//        System.out.println("Driver details added successfully!");
//    }
////
//    private static void viewAllDrivers() {
//        List<Driver> drivers = driverService.getAllDrivers();
//        if (drivers.isEmpty()) {
//            System.out.println("No drivers found.");
//        } else {
//            System.out.println("\n====== All Drivers ======");
//            for (Driver driver : drivers) {
//                System.out.println(driver);
//            }
//        }
//    }
//
//    private static void updateVehicleDetailsById() {
//        Scanner scanner = new Scanner(System.in);
//        System.out.print("Enter vehicle ID: ");
//        int id = scanner.nextInt();
//        scanner.nextLine();
//
//        System.out.print("Enter new model: ");
//        String model = scanner.nextLine();
//        System.out.print("Enter new year: ");
//        int year = scanner.nextInt();
//        scanner.nextLine();
//
//        vehicleService.updateVehicleDetails(id, model, year);
//        System.out.println("Vehicle details updated successfully!");
//    }
//
//    private static void deleteVehicleById() {
//        Scanner scanner = new Scanner(System.in);
//        System.out.print("Enter vehicle ID to delete: ");
//        int id = scanner.nextInt();
//        scanner.nextLine();
//
//        vehicleService.deleteVehicleById(id);
//        System.out.println("Vehicle details deleted successfully!");
//    }
//
//
//
//    private static void getAllDrivers() {
//        List<Driver> drivers = driverService.getAllDrivers();
//        if (drivers.isEmpty()) {
//            System.out.println("No drivers found.");
//        } else {
//            System.out.println("\n====== All Drivers ======");
//            for (Driver driver : drivers) {
//                System.out.println(driver);
//            }
//        }
//    }
//
//    private static void updateDriverDetails() {
//        Scanner scanner = new Scanner(System.in);
//        System.out.print("Enter driver ID to update: ");
//        int id = scanner.nextInt();
//        scanner.nextLine();
//
//        Driver existingDriver = driverService.updateDriverDetails(id);
//        if (existingDriver == null) {
//            System.out.println("Driver not found with ID: " + id);
//        } else {
//            System.out.print("Enter updated driver name: ");
//            String name = scanner.nextLine();
//            System.out.print("Enter updated driver address: ");
//            String address = scanner.nextLine();
//            System.out.print("Enter updated driver mobile: ");
//            String mobile = scanner.nextLine();
//            System.out.print("Enter updated driver license: ");
//            String license = scanner.nextLine();
//
//            existingDriver.setName(name);
//            existingDriver.setAddress(address);
//            existingDriver.setMobile(mobile);
//            existingDriver.setLicense(license);
//
//            driverService.updateDriverDetails(existingDriver);
//
//            System.out.println("Driver details updated successfully!");
//        }
//    }
//
//    private static void deleteDriverById() {
//        Scanner scanner = new Scanner(System.in);
//        System.out.print("Enter driver ID to delete: ");
//        int id = scanner.nextInt();
//        scanner.nextLine();
//
//        driverService.deleteDriverById(id);
//
//        System.out.println("Driver details deleted successfully!");
//    }
//}
//
//
