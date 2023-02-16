# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_02_204645) do
  create_table "diets", force: :cascade do |t|
    t.string "diet_name"
    t.string "sunday_breakfast"
    t.string "sunday_lunch"
    t.string "sunday_dinner"
    t.string "sunday_snacks"
    t.string "monday_breakfast"
    t.string "monday_lunch"
    t.string "monday_dinner"
    t.string "monday_snacks"
    t.string "tuesday_breakfast"
    t.string "tuesday_lunch"
    t.string "tuesday_dinner"
    t.string "tuesday_snacks"
    t.string "wednesday_breakfast"
    t.string "wednesday_lunch"
    t.string "wednesday_dinner"
    t.string "wednesday_snacks"
    t.string "thursday_breakfast"
    t.string "thursday_lunch"
    t.string "thursday_dinner"
    t.string "thursday_snacks"
    t.string "friday_breakfast"
    t.string "friday_lunch"
    t.string "friday_dinner"
    t.string "friday_snacks"
    t.string "saturday_breakfast"
    t.string "saturday_lunch"
    t.string "saturday_dinner"
    t.string "saturday_snacks"
    t.boolean "on_profile"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movement_how_tos", force: :cascade do |t|
    t.integer "movement_id", null: false
    t.string "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movement_id"], name: "index_movement_how_tos_on_movement_id"
  end

  create_table "movements", force: :cascade do |t|
    t.string "name"
    t.integer "reps"
    t.integer "sets"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "profile_pic"
    t.string "username"
    t.string "password_digest"
    t.integer "height"
    t.integer "weight"
    t.integer "weight_goal"
    t.string "gender"
    t.string "fitness_goal"
    t.string "health_goal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workout_with_movements", force: :cascade do |t|
    t.integer "workout_id", null: false
    t.integer "movement_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movement_id"], name: "index_workout_with_movements_on_movement_id"
    t.index ["workout_id"], name: "index_workout_with_movements_on_workout_id"
  end

  create_table "workouts", force: :cascade do |t|
    t.string "name"
    t.boolean "on_profile"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "movement_how_tos", "movements"
  add_foreign_key "workout_with_movements", "movements"
  add_foreign_key "workout_with_movements", "workouts"
end
