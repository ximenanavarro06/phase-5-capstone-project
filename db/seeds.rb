# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "💥 Destroying data..."
WorkoutWithMovement.destroy_all
Workout.destroy_all
MovementHowTo.destroy_all
Diet.destroy_all
User.destroy_all
Movement.destroy_all



puts "🏋🏼 Seeding User..."
user1 = User.create(
        profile_pic: "https://www.georgiaaquarium.org/wp-content/uploads/2018/08/common-bottlenose-dolphin.jpg",
        username: "Admin",
        password: "password",
        height: 64,
        weight: 139,
        weight_goal: 143,
        gender: "Female",
        fitness_goal: "To increase my endurance and run 3 miles without stopping",
        health_goal: "To practice a healthy diet and regular exercise routine"
)


puts "🏋🏼 Seeding Workouts..."
Workout.create!(
    name: "Workout 1",
    on_profile: false
)
Workout.create!(
    name: "Workout 2",
    on_profile: false
)
Workout.create!(
    name: "Workout 3",
    on_profile: false
)
Workout.create!(
    name: "Workout 4",
    on_profile: false
)


puts "🏋🏼 Seeding Movements..."
squat = Movement.create!(
        name: "Back Squat",
        reps: 4,
        sets: 5
)

deadlift = Movement.create(
    name: "Deadlift",
    reps: 4,
    sets: 5
)
kbswing = Movement.create(
    name: "Kettlebell Swing",
    reps: 15,
    sets: 5
)
array=[]
array.push(squat.id)

puts "🏋🏼 Adding movements to Workouts..."
Workout.all.each do |workout|
    array.shuffle
    index =0
    (4).times do
        movement = Movement.find(Movement.pluck(:id).sample)

        WorkoutWithMovement.create(workout_id: workout.id, movement_id: movement.id)
    end
end

# WorkoutWithMovement.create(workout_id: workout.id, movement_id: movementarray[0])
# WorkoutWithMovement.create(workout_id: workout.id, movement_id: movementarray[1])










puts "🏋🏼 Seeding MovementHowTo..."
MovementHowTo.create([
    {
        link: "https://www.youtube.com/watch?v=RpBf5ZRdvWE",
        movement_id: squat.id

    },
    {
        link: "https://www.youtube.com/watch?v=r4MzxtBKyNE",
        movement_id: deadlift.id
    },
    {
        link: "https://www.youtube.com/watch?v=r4MzxtBKyNE",
        movement_id: kbswing.id
    }
])

puts "🏋🏼 Seeding Diet..."
Diet.create([
    {
        diet_name: "Vegetarian",
        sunday_breakfast: "sdgfsdf",
        sunday_lunch: "sdfsdf",
        sunday_dinner: "sdfsdf",
        sunday_snacks: "sdfsdf",
        monday_breakfast: "sdfsdf",
        monday_lunch: "sdfsdfd",
        monday_dinner: "sdfdsf",
        monday_snacks: "sdfsdfds",
        tuesday_breakfast: "sdfsdfds",
        tuesday_lunch: "sdfsdfsd",
        tuesday_dinner: "sdfsdf",
        tuesday_snacks: "sdfdsf",
        wednesday_breakfast: "sdfsdf",
        wednesday_lunch: "dsfdsf",
        wednesday_dinner: "sdfsdf",
        wednesday_snacks: "sdfdsf",
        thursday_breakfast: "sdff",
        thursday_lunch: "sdfsdf",
        thursday_dinner: "sdfdsf",
        thursday_snacks: "sdsfdsf",
        friday_breakfast: "sdfsdf",
        friday_lunch: "sdfsdfsd",
        friday_dinner: "sdfdsf",
        friday_snacks: "sdfsdfd",
        saturday_breakfast: "sdfdsfdf",
        saturday_lunch: "sdfdsf",
        saturday_dinner: "sdfsdf",
        saturday_snacks: "sdfsdf",
        on_profile: false
    },
    {
        diet_name: "Meat",
        sunday_breakfast: "sdgfsdf",
        sunday_lunch: "sdfsdf",
        sunday_dinner: "sdfsdf",
        sunday_snacks: "sdfsdf",
        monday_breakfast: "sdfsdf",
        monday_lunch: "sdfsdfd",
        monday_dinner: "sdfdsf",
        monday_snacks: "sdfsdfds",
        tuesday_breakfast: "sdfsdfds",
        tuesday_lunch: "sdfsdfsd",
        tuesday_dinner: "sdfsdf",
        tuesday_snacks: "sdfdsf",
        wednesday_breakfast: "sdfsdf",
        wednesday_lunch: "dsfdsf",
        wednesday_dinner: "sdfsdf",
        wednesday_snacks: "sdfdsf",
        thursday_breakfast: "sdff",
        thursday_lunch: "sdfsdf",
        thursday_dinner: "sdfdsf",
        thursday_snacks: "sdsfdsf",
        friday_breakfast: "sdfsdf",
        friday_lunch: "sdfsdfsd",
        friday_dinner: "sdfdsf",
        friday_snacks: "sdfsdfd",
        saturday_breakfast: "sdfdsfdf",
        saturday_lunch: "sdfdsf",
        saturday_dinner: "sdfsdf",
        saturday_snacks: "sdfsdf",
        on_profile: false
    }
])

puts "🕺🏻 Done seeding"
