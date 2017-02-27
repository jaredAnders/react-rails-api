class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :question_text
      t.integer :answer
      t.text :distractors, array: true, default: []

      t.timestamps null: false
    end
  end
end
