class CreateMovements < ActiveRecord::Migration[7.0]
  def change
    create_table :movements do |t|
      t.string :name
      t.integer :reps
      t.integer :sets

      t.timestamps
    end
  end
end
