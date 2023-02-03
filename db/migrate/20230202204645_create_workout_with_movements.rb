class CreateWorkoutWithMovements < ActiveRecord::Migration[7.0]
  def change
    create_table :workout_with_movements do |t|
      t.belongs_to :workout, null: false, foreign_key: true
      t.belongs_to :movement, null: false, foreign_key: true

      t.timestamps
    end
  end
end
