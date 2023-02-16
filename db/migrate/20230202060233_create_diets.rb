class CreateDiets < ActiveRecord::Migration[7.0]
  def change
    create_table :diets do |t|
      t.string :diet_name
      t.string :sunday_breakfast
      t.string :sunday_lunch
      t.string :sunday_dinner
      t.string :sunday_snacks
      t.string :monday_breakfast
      t.string :monday_lunch
      t.string :monday_dinner
      t.string :monday_snacks
      t.string :tuesday_breakfast
      t.string :tuesday_lunch
      t.string :tuesday_dinner
      t.string :tuesday_snacks
      t.string :wednesday_breakfast
      t.string :wednesday_lunch
      t.string :wednesday_dinner
      t.string :wednesday_snacks
      t.string :thursday_breakfast
      t.string :thursday_lunch
      t.string :thursday_dinner
      t.string :thursday_snacks
      t.string :friday_breakfast
      t.string :friday_lunch
      t.string :friday_dinner
      t.string :friday_snacks
      t.string :saturday_breakfast
      t.string :saturday_lunch
      t.string :saturday_dinner
      t.string :saturday_snacks
      t.boolean :on_profile

      t.timestamps
    end
  end
end
